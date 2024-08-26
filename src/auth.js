export const login = async (credentials) => {
  try {
    const response = await fetch("https://foodit-cpig.onrender.com/auth/local/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    throw new Error(error.message || 'Something went wrong');
  }
};





export const signup = async (userDetails) => {
  try {
    const response = await fetch("https://foodit-cpig.onrender.com/auth/local/signup", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });

    const responseData = await response.json();

    if (!response.ok) {
      return { success: false, message: responseData.error?.message || "Something went wrong" };
    }

    return { success: true, data: responseData };
  } catch (error) {
    console.error("Signup error:", error);
    return { success: false, message: error.message || "Signup failed. Please try again." };
  }
};

