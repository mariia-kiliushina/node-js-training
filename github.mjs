import https from "https";

const getRepositories = (userName, onDone) => {
  if (!userName)
    return onDone(new Error("Необходимо указать имя пользователя"));

  const option = {
    hostname: "api.github.com",
    path: `/users/${userName}/repos`,
    headers: {
      "User-Agent": "github-app",
    },
  };

  const request = https.get(option, (response) => {
    response.setEncoding("utf-8");
    if (response.statusCode === 200) {
      let body = "";
      response.on("data", (data) => (body += data));
      response.on("end", () => {
        const result = JSON.parse(body);
        onDone(null, result);
      });
    } else {
      console.log("sth went wrong  " + response.statusCode);
    }
  });
  request.on("error", (error) =>
    onDone(new Error("Не удалось отправить запрос"))
  );
};

export default getRepositories;
