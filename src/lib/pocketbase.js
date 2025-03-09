import PocketBase from "pocketbase";

 export const pb = new PocketBase('http://127.0.0.1:8090');


 export async function create_user(
    email,
    password,
    confirmpassword,
    firstname,
    lastname
  ) {
    const data = {
    "email": email,
    "emailVisibility": true,
    "password": password,
    "passwordConfirm": confirmpassword,
    "firstname": firstname,
    "lastname": lastname
    };
    await pb.collection("users").create(data);
    const record = await pb
      .collection("users")
      .authWithPassword(email, password);
    return record;
  }

 export async function login(email, password) {
    const record = await pb
      .collection("users")
      .authWithPassword(email, password);
    return record;
  }

  export function logout() {
    // "logout" the last authenticated account
    pb.authStore.clear();
  }

  export async function user_info() {
    const id = pb.authStore.record.id;
    const record = await pb.collection("users").getOne(id);
    return record;
  }

  export async function deleteaccount() {
   const id = pb.authStore.record.id;
   const record = await pb.collection("users").delete(id);
   return record;
  }
