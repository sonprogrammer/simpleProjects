export default function handler(req, res){
    res.status(200).json({
        name: 'son',
        age: 28,
        isValid: true
    })
}