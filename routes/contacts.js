import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Contacts route');
});

    // Get all contacts
router.get('/all', (req, res) => {
    res.send('All contacts');
});
  
  // Get a contact by id
router.get('/:id', (req, res) => {
 const id = req.params.id;
 res.send('Contact by id ' + id);
});
  
  // to-do: add post, put, and delete routers

// make a new contact
router.post('/create', (req, res) => {
  res.send('Create a contact');
});

// update a contact
router.put('/update/:id', (req, res) => {
  const id = req.params.id;
  res.send('Update contact with id ' + id);
});

// remove a contact
router.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  res.send('Delete contact with id ' + id);
});
export default router;