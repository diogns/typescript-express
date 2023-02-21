import express from 'express'
import * as diaryService from '../services/diaryServices'
import toNewDiaryEntry from '../utils'
const router = express.Router()

router.get('/', (_req, res) => {
    res.send(diaryService.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
    const diary = diaryService.findById(Number(req.params.id))

    return (diary !== undefined) ? res.send(diary) : res.sendStatus(404)
    // res.send(diary?.weather)
})

router.post('/', (req, res) => {
    try {
        // const { date, weather, visibility, comment } = req.body
        const newDiaryEntry = toNewDiaryEntry(req.body)
        const addedDiaryEntry = diaryService.addDiary(newDiaryEntry)
        res.json(addedDiaryEntry)
    } catch (e: any) {
        res.status(400).send(e.message)
    }
})

export default router
