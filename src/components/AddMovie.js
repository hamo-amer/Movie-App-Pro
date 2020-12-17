import React,{useState} from 'react';
import Modal from 'react-modal';
 
// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)',
   
//   }
// };
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
 
function AddMovie({addMovie}){
  var subtitle;
  const [modalIsOpen,setIsOpen] = useState(false);
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [date, setDate] = useState("")
  const [rating, setRating] = useState()
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }
  const handleSubmit=()=>{
      const newMovie={name,description,image,date,rating,id:Math.random()}
        addMovie(newMovie)
        setName("")
        setDescription("")
        setImage("")
        setDate("")
        setRating("")
        closeModal()
  }
 
    return (
      <div >
        <button onClick={openModal} style={{padding:"100px",fontSize:"3.8rem",backgroundColor:"blue",margin:"20px",border:"1px solid blue",borderRadius:"10px"}}>+</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
        //   style={customStyles}
          contentLabel="Example Modal"
        style={{display:"flex",justifyContent:"center"}}
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
         
         
          <form>
              <label> Movie Name</label>
            <input type="text" name="name"   onChange={(e)=>setName(e.target.value)} />
            <label> Movie Description</label>
            <input type="text" name="description" onChange={(e)=>setDescription(e.target.value)}/>
            <label> Movie Date</label>
            <input type="date"name="date" onChange={(e)=>setDate(e.target.value)} />
            <label> Movie Rating</label>
            <input type="number" name="rating"  onChange={(e)=>setRating(e.target.value)}/>
            <label> Movie Image</label>
            <input type="text" name="image"  onChange={(e)=>setImage(e.target.value)}/>
          </form>
          <button onClick={closeModal}>close</button>
          <button onClick={handleSubmit}>Submit</button>
        </Modal>
      </div>
    );
}

export default AddMovie
