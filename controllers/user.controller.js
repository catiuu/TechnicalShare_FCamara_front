const userService = require("../services/user.services");

class Controller {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userService.login(email, password);

      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updateProfile(req, res) {
    try {
      const { id, jobTitle, aboutMe, pronouns } = req.body;
      const response = await userService.updateProfile({
        id,
        jobTitle,
        aboutMe,
        pronouns,
      });

      res.status(201).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async findUsers(req, res) {
    try {
      const { searchInput } = req.body;
      const response = await userService.findUsers(searchInput);
      res.json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async addSkill(req, res) {
    try {
      const { userId, skillId } = req.body;
      const response = await userService.addSkill(userId, skillId);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async removeSkill(req, res) {
    console.log("FRONT CONTROLLER");

    try {
      const { userId, skillId } = req.body;
      const response = await userService.removeSkill(userId, skillId);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async findUserById(req, res) {
    try {
      const { id } = req.body;
      const response = await userService.findUserById(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

const userController = new Controller();
module.exports = userController;
