import PocketBase from "pocketbase";

 export const pb = new PocketBase('http://127.0.0.1:8090');


 export async function create_user(
    email,
    password,
    confirmpassword,
    firstname,
    lastname,
    username
  ) {
    const data = {
    "email": email,
    "emailVisibility": true,
    "password": password,
    "passwordConfirm": confirmpassword,
    "firstname": firstname,
    "lastname": lastname,
    "username" :username
    };
    await pb.collection("users").create(data);
    const record = await pb
      .collection("users")
      .authWithPassword(email, password);
    return record;
  }

  export async function update_user(
    newpassword,
    confirmpassword,
    password,
    email,
    firstname,
    lastname,
    username
  ) {
    const data = {
    "password": newpassword,
    "passwordConfirm": confirmpassword,
    "oldPassword": password,
    "email": email,
    "emailVisibility": true,
    "verified": true,
    "firstname": firstname,
    "lastname": lastname,
    "username" :username
    };
    const id = pb.authStore.record.id;

    const record = await pb.collection("users").update(id, data);
    
    //  await pb
    //   .collection("users")
    //   .authWithPassword(email, password);
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
