const backend = require("../api/backend.service");
const axios = require("axios");

class Service {
  async login(email, password) {
    const { data } = await axios.post("http://localhost:3000/user/login", {
      email: email,
      password: password,
    });
    return data;
  }

  async updateProfile(newProfile) {
    const { data } = await axios.patch(
      "http://localhost:3000/user/profile",
      newProfile,
    );
    return data;
  }

  async findUsers(searchInput) {
    const { data } = await axios.post(`http://localhost:3000/user/search`, {
      searchInput: searchInput,
    });

    return data;
  }

  async addSkill(userId, skillId) {
    const { data } = await axios.post("http://localhost:3000/user/addskills", {
      userId: userId,
      skillId: skillId,
    });
    return data;
  }

  async removeSkill(userId, skillId) {
    const { data } = await axios.post(
      "http://localhost:3000/user/removeskills",
      {
        userId: userId,
        skillId: skillId,
      },
    );
    return data;
  }

  async findUserById(id) {
    const { data } = await axios.post("http://localhost:3000/user/id", {
      id: id,
    });
    return data;
  }
}

const backendService = new Service();
module.exports = backendService;
