const Router = require("express-promise-router");
const db = require("../../db");

const router = new Router();

module.exports = router;
router.get("/:param1/:param2/:param3", async (req, res) => {
    const { param1, param2, param3 } = req.params;
    const {
        rows,
    } = await db.query(
        "SELECT * FROM notes WHERE param1 = $1 AND param2 = $2 AND param3 = $3",
        [param1, param2, param3]
    );

    if (rows.length) {
        return res.send(rows[0]);
    } else {
        let {
            rows,
        } = await db.query(
            "INSERT INTO notes (param1, param2, param3, note, created_at) VALUES ($1, $2, $3, 'Edit this text',CURRENT_TIMESTAMP) RETURNING * ",
            [param1, param2, param3]
        );
        return res.send(rows[0]);
    }
});

router.put("/:param1/:param2/:param3", async (req, res) => {
    const { param1, param2, param3 } = req.params;
    console.log(req.body);
    const { note } = req.body;
    const {
        rows,
    } = await db.query(
        "UPDATE notes SET note = $4, created_at = CURRENT_TIMESTAMP WHERE param1 = $1 AND param2 = $2 AND param3 = $3 RETURNING * ",
        [param1, param2, param3, note]
    );
    return res.send(rows[0]);
});
