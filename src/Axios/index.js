import axios from "axios";
const url = "https://core.talentspace.ai/api2";

const getApi = async (url) => {
  try {
    const data = await fetch(`https://core.talentspace.ai/api2/${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    return data.json();
  } catch (err) {
    console.log(err);
  }
};

const postApi = async (url, data, isForm) => {
  const bodyData = isForm ? data : JSON.stringify(data);
  const headers = isForm ? {} : { "Content-Type": "application/json" };

  try {
    const response = await fetch(`https://core.talentspace.ai/api2/${url}`, {
      method: "POST",
      headers: headers,

      body: bodyData,
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get("Content-Type");

    let result;
    if (contentType && contentType.includes("application/json")) {
      result = await response.json();
    } else {
      result = await response.text();
    }

    return result;
  } catch (err) {
    throw new Error(err || "An unknown error occurred.");
  }
};

export { getApi, postApi };
