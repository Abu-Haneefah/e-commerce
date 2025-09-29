export const updateUser = async (formData: { get: (arg0: string) => any }) => {
  // MOCK THE API CALL
  console.log("Mocking a user update with the following data:");
  console.log("ID:", formData.get("id"));
  console.log("Username:", formData.get("username"));
  console.log("First Name:", formData.get("firstName"));
  console.log("Last Name:", formData.get("lastName"));
  console.log("Email:", formData.get("email"));
  console.log("Phone:", formData.get("phone"));

  // You can also add a mock success message
  return { success: true, message: "User data updated successfully (mock)." };
};
