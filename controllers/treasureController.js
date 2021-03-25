module.exports = {
    dragonTreasure: async (req, res) => {
        const db = req.app.get('db')

        const treasure = await db.get_dragon_treasure(1)
        res.status(200).send(treasure)
    },

    getUserTreasure: async (req, res) => {
        const db = req.app.get('db')
        console.log(req.session.user)
        const treasure = await db.get_user_treasure(req.session.user.id)
        res.status(200).send(treasure)
    },

    getAllTreasure: async (req, res) => {
        const db = req.app.get('db')
        const allTreasures = await db.get_all_treasure()
        res.status(200).send(allTreasures)
    }
}