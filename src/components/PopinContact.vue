<template>
  <div class="popinContact">
    <v-btn bottom color="pink" dark fab fixed right @click="dialog = !dialog">
      <v-icon>mdi-email</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="primary">
          {{$t(`contact.title`)}}
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-container>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row class="mx-2">
              <v-col cols="12">
                <v-text-field
                  v-model="form.name"
                  :rules="nameRules"
                  prepend-icon="mdi-account"
                  name="name"
                  required
                  :label="$t(`contact.name`)"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="form.email"
                  :rules="emailRules"
                  name="email"
                  required
                  prepend-icon="mdi-mail"
                  type="email"
                  :label="$t(`contact.email`)"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  type="tel"
                  name="phone"
                  v-model="form.phone"
                  prepend-icon="mdi-phone"
                  :label="$t(`contact.phone`)"
                />
              </v-col>
              <v-col cols="12">
                <v-textarea
                  solo
                  v-model="form.message"
                  :rules="textareaRules"
                  name="message"
                  prepend-icon="mdi-text"
                  :label="$t(`contact.message`)"
                  required
                ></v-textarea>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="dialog = false">{{$t(`general.cancel`)}}</v-btn>
          <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
            {{$t(`general.send`)}}
            <v-icon class="ml-2">mdi-send</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "PopinContact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        message: ""
      },
      dialog: null,
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length >= 2) || "Name must be more than 2 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      textarea: "",
      textareaRules: [
        v => !!v || "Message is required",
        v => (v && v.length >= 10) || "Name must be more than 10 characters"
      ]
    };
  },
  methods: {
    validate() {
      var validate = this.$refs.form.validate();
      if (validate == true) {
        this.axios
          .post("/mail.php", this.form)
          .then(response => {
            alert("Votre message à bien été envoyé !");
          })
          .catch(error => {
            console.log(this.form);
            alert("Une erreur est survenue, merci de réessayer.");
          });
      }
    }
  }
};
</script>