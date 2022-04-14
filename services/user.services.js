const backendService = require("../api/backend.service");

class Service {
  async login(email, password) {
    const data = await backendService.login(email, password);
    return data;
  }

  async updateProfile(newProfile) {
    const data = await backendService.updateProfile(newProfile);
    return data;
  }

  async findUsers(searchInput) {
    const data = await backendService.findUsers(searchInput);
    return data;
  }

  async addSkill(userId, skillId) {
    const data = await backendService.addSkill(userId, skillId);
    return data;
  }

  async removeSkill(userId, skillId) {
    const data = await backendService.removeSkill(userId, skillId);
    return data;
  }

  async findUserById(id) {
    const data = backendService.findUserById(id);
    return data;
  }
}

const userService = new Service();
module.exports = userService;
