export default async function handler(rea, res) {
  const {id, title, content} = req.body
try{
    await createPost({
      id,
      title,
      date: format(new Date(), 'yyyy-MM-dd'),
      content,
    })
  res.status(200).json({message: 'create success'})
} catch(error) {
  res.status(500).json({error: `create failed ${error}`})
}
}
