const userService = require("../services/user.services");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class Controller {
  async login(req, res) {
    try {
      // const { email, password } = req.body;
      const user = await userService.login("mario.bros@email.com", "12345");

      if (!user) {
        return res
          .status(400)
          .json({ mensagem: "E-mail ou senha não conferem." });
      }
      // TOKEN
      jwt.sign(
        { id: user.id },
        process.env.SECRET_JWT,
        {
          expiresIn: "1h",
        },
        (err, token) => {
          if (err) {
            res.status(400).json("Falha interna!");
          } else {
            res.render('main', {title: 'Orange Share | Home', page: 'home'})
          }
        },
      );
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updateProfile(req, res) {
    console.log("1");
    try {
      const { userId, jobTitle, aboutMe, pronouns } = req.body;
      const response = await userService.updateProfile({
        userId,
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
      const searchInput = req.query.searchInput;
      const response = await userService.findUsers(searchInput);
      res.status(201).json(response);
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
      const id = req.params.id;
      const response = await userService.findUserById(id);
      const user = response[id - 1]
      const userSkills = user.Skills
      let skills = ''

      for (let i = 0; i < userSkills.length; i++) {
        skills += `<p>${userSkills[i].name}</p>`
      }
        
      await res.render('main', {
        title: 'Orange Share | Perfil',
        page: 'logged-user',
        userName: user.fullName,
        userJob: user.jobTitle,
        userPronouns: user.pronouns,
        userBio: user.aboutMe,
        userSkills: skills,
        image: user.id
      })

      // console.log(userSkills.length)

    } catch (error) {
      res.status(500).json(error);
    }
  }
}

const userController = new Controller();
module.exports = userController;
