<template>
  <div class="popinContact text-center">
    <v-divider></v-divider>

    <v-btn bottom color="red darken-4" class=" mt-5" @click="dialog = !dialog">
      <v-icon class="mr-2">mdi-email</v-icon>
      {{ $t(`contact.title`) }}
    </v-btn>

    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="primary">
          {{ $t(`contact.title`) }}
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-container>
          <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submit">
              <validation-provider
                v-slot="{ errors }"
                name="name"
                rules="required|min:2"
              >
                <v-text-field
                  v-model="form.name"
                  :length="5"
                  :error-messages="errors"
                  prepend-icon="mdi-account"
                  name="name"
                  required
                  :label="$t(`contact.name`)"
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="email"
                rules="required|email"
              >
                <v-text-field
                  v-model="form.email"
                  :error-messages="errors"
                  name="email"
                  required
                  prepend-icon="mdi-mail"
                  type="email"
                  :label="$t(`contact.email`)"
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="phone"
                :rules="{
                  max: 15,
                  regex: /^[0-9\-.\+\s\(\)]+$/,
                }"
              >
                <v-text-field
                  v-model="form.phone"
                  :error-messages="errors"
                  type="tel"
                  name="phone"
                  prepend-icon="mdi-phone"
                  :label="$t(`contact.phone`)"
                ></v-text-field>
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="message"
                rules="required|min:5"
              >
                <v-textarea
                  solo
                  v-model="form.message"
                  :error-messages="errors"
                  name="message"
                  prepend-icon="mdi-text"
                  :label="$t(`contact.message`)"
                  required
                >
                </v-textarea>
              </validation-provider>
              <v-card-actions>
                <v-spacer />
                <v-btn @click="dialog = false">{{
                  $t(`general.cancel`)
                }}</v-btn>
                <v-btn
                  class="mr-4"
                  color="success"
                  type="submit"
                  :disabled="invalid"
                >
                  {{ $t(`general.send`) }}
                  <v-icon class="ml-2">mdi-send</v-icon>
                </v-btn>
              </v-card-actions>
            </form>
          </validation-observer>
        </v-container>
      </v-card>
    </v-dialog>

    <v-bottom-sheet inset v-model="sheet">
      <v-card>
        <v-card-text class="blue--text text--lighten-2 text-center pt-3">
          <v-btn icon class="mb-3" @click="sheet = !sheet"
            ><v-icon color="blue" class="ml-2"
              >mdi-close-circle-outline</v-icon
            ></v-btn
          >
          <h3>
            {{ $t(`contact.notif_error`) }}
            <v-icon color="blue">{{ notif_status }}</v-icon>
          </h3>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>

<script>
import {
  localize,
  ValidationObserver,
  ValidationProvider,
  extend,
} from "vee-validate";
import { required, email, min, regex, max } from "vee-validate/dist/rules";

localize({
  en: {
    fields: {
      name: {
        required: "Your name is required",
        min: "Your name must have 2 characters",
      },
      email: {
        required: "Your email is required",
        email: "Your email is invalid",
      },
      phone: {
        regex: "Your phone number is invalid",
        max: "Your phone number can have a maximum of 15 digits",
      },
      message: {
        required: "Your message is required",
        min: "Your message must have 5 characters",
      },
    },
  },
  fr: {
    fields: {
      name: {
        required: "Votre nom est requis",
        min: "Votre nom doit comporter au moins 2 caractères",
      },
      email: {
        required: "Votre email est requise",
        email: "Votre email est invalide",
      },
      phone: {
        regex: "Votre numéro de téléphone est invalide",
        max:
          "Votre numéro de téléphone ne peut avoir que 15 chiffres au maximum",
      },
      message: {
        required: "Votre message est requis",
        min: "Votre message doit comporter au moins 5 caractères",
      },
    },
  },
});

extend("required", required);
extend("email", email);
extend("min", min);
extend("regex", regex);
extend("max", max);

localize("fr");

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  name: "PopinContact",

  data() {
    return {
      sheet: false,
      dialog: null,
      notif_message: "",
      notif_status: "",
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    submit() {
      this.axios
        .post("/mail.php", this.form)
        .then((response) => {
          this.$refs.form.reset();
          this.dialog = false;
          this.notif_message = "contact.notif_ok";
          this.notif_status = "mdi-email-send-outline";
          this.sheet = true;
        })
        .catch((error) => {
          this.notif_message = "contact.notif_error";
          this.notif_status = "mdi-email-remove-outline";
          this.sheet = true;
        });
    },
  },
};
</script>

<style scoped>
#container {
  border: 1px solid #2196f3;
}
</style>
