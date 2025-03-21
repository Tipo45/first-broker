

const Passwordedit = () => {
 

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    
  };

  return (
    <div>
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        
        <button className="bg-teal">Request Reset</button>
      </form>
      
    </div>
  );
};

export default Passwordedit;
