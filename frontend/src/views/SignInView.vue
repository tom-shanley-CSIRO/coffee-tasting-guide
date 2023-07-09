<template >
    <div class="register-view">
        <h1>Create an account</h1>
        <p><input type="text" placeholder="email" v-model="email"></p>
        <p><input type="text" placeholder="password" v-model="password"></p>
        <p v-if="errMsg">{{ errMsg }}</p>
        <p><button @click="signin">Sign In</button></p>
        <p><button @click="signInWithGoogle">Sign in with Google</button></p>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router';
const router = useRouter()

const email = ref("")
const password = ref("")
const errMsg = ref("")

const signin = () => {

    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Signed In!");
            console.log(data);
            router.push('/')
        }).catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid Email"
                    break;
                case "auth/user-not-found":
                    errMsg.value = "User not found"
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Wrong Password"
                    break;
                default:
                    errMsg.value = "Email or Password was incorrect"
                    break;
            }
        })
};

const signInWithGoogle = () => {

}
</script>

<style ></style>