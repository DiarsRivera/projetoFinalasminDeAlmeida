const express = require("express");
const router = express.Router();
const controller = require("../controllers/estabelecimentosController")

router.post("/criar", controller.abriCadastro);
router.get("/pegar", controller.todosOsEstabelecimentos);
router.get("/pegar/:id", controller.pesquisarPorId);
router.put("/atualizar/:id", controller.updatePorId)
router.delete("/:id", controller.deletarCadastro)

module.exports = router
