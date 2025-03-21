import PocketBase from "pocketbase";

export const pb = new PocketBase("http://127.0.0.1:8090");

// checks if a user is logged in
export const isUserLoggedIn = () => {
  return pb.authStore.isValid;
};

// create user
export async function create_user(
  email,
  password,
  confirmpassword,
  firstname,
  lastname,
  username
) {
  const data = {
    email: email,
    emailVisibility: true,
    password: password,
    passwordConfirm: confirmpassword,
    firstname: firstname,
    lastname: lastname,
    username: username,
  };
  await pb.collection("users").create(data);
  const record = await pb.collection("users").authWithPassword(email, password);
  return record;
}

// update users names
export const update_names = async (firstname, lastname) => {
  try {
    if (!pb.authStore.isValid) {
      throw new Error("User not authenticated");
    }

    const userId = pb.authStore.record.id;

    const currentUser = await pb.collection("users").getOne(userId);

    const updatedRecord = await pb.collection("users").update(userId, {
      firstname,
      lastname,
      username: currentUser.username,
      oldPassword: currentUser.password,
      password: currentUser.password,
      passwordConfirm: currentUser.password,
      verified: currentUser.verified,
      country: currentUser.country,
    });

    return updatedRecord;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// update users username
export const update_username = async (username) => {
  try {
    if (!pb.authStore.isValid) {
      throw new Error("User not authenticated");
    }

    const userId = pb.authStore.record.id;

    const currentUser = await pb.collection("users").getOne(userId);

    const updatedRecord = await pb.collection("users").update(userId, {
      firstname: currentUser.firstname,
      lastname: currentUser.lastname,
      username,
      oldPassword: currentUser.password,
      password: currentUser.password,
      passwordConfirm: currentUser.password,
      verified: currentUser.verified,
      country: currentUser.country,
    });

    return updatedRecord;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// update users country
export const update_country = async (country) => {
  try {
    if (!pb.authStore.isValid) {
      throw new Error("User not authenticated");
    }

    const userId = pb.authStore.record.id;

    const currentUser = await pb.collection("users").getOne(userId);

    const updatedRecord = await pb.collection("users").update(userId, {
      firstname: currentUser.firstname,
      lastname: currentUser.lastname,
      username: currentUser.username,
      oldPassword: currentUser.password,
      password: currentUser.password,
      passwordConfirm: currentUser.password,
      verified: currentUser.verified,
      country,
    });

    return updatedRecord;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// update users ID
export const update_userID = async (upload) => {
  try {
    if (!pb.authStore.isValid) {
      throw new Error("User not authenticated");
    }

    const userId = pb.authStore.record.id;

    const currentUser = await pb.collection("users").getOne(userId);

    const updatedRecord = await pb.collection("users").update(userId, {
      firstname: currentUser.firstname,
      lastname: currentUser.lastname,
      username: currentUser.username,
      oldPassword: currentUser.password,
      password: currentUser.password,
      passwordConfirm: currentUser.password,
      verified: currentUser.verified,
      country: currentUser.country,
      upload,
    });

    return updatedRecord;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// update users password
// export const update_password = async (
//   oldPassword,
//   password,
//   passwordConfirm
// ) => {
//   try {
//     if (!pb.authStore.isValid) {
//       throw new Error("User not authenticated");
//     }

//     const userId = pb.authStore.record.id;

//     const currentUser = await pb.collection("users").getOne(userId);

//     const updatedRecord = await pb.collection("users").update(userId, {
//       firstname: currentUser.firstname,
//       lastname: currentUser.lastname,
//       username: currentUser.username,
//       oldPassword,
//       password,
//       passwordConfirm,
//       verified: currentUser.verified,
//       country: currentUser.country,
//     });

//     return updatedRecord;
//   } catch (error) {
//     console.error("Error updating user:", error);
//     throw error;
//   }
// };

// reset password
export async function requestPasswordReset(email) {
  try {
      await pb.collection('users').requestPasswordReset(email);
      alert('Password reset email sent successfully.');
  } catch (error) {
      alert('Failed to send password reset email:', error.message);
  }
}

// login user
export async function login(email, password) {
  const record = await pb.collection("users").authWithPassword(email, password);
  return record;
}

// logout user
export function logout() {
  // "logout" the last authenticated account
  pb.authStore.clear();
}

// query users data
export async function user_info() {
  const id = pb.authStore.record.id;
  const record = await pb.collection("users").getOne(id);
  return record;
}

// delete users account
export async function deleteaccount() {
  const id = pb.authStore.record.id;
  const record = await pb.collection("users").delete(id);
  return record;
}
