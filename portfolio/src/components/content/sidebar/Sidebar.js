import './Sidebar.css';

function Sidebar() {
  return (
    <div className=' flex column sidebar'>
        <h1>Projects</h1>

        <br></br>

        <div className='flex checkbox'>
            <input type="checkbox" id="Java" name="Java" value="Java"></input>
            <label htmlFor='Java'>Java</label>
        </div>
        <div className='flex checkbox'>
            <input type="checkbox" id="C#" name="C#" value="C#"></input>
            <label htmlFor='C#'>C#</label>
        </div>
        <div className='flex checkbox'>
            <input type="checkbox" id="Python" name="Python" value="Python"></input>
            <label htmlFor='Python'>Python</label>
        </div>

        <br></br>

        <div className='flex checkbox'>
            <input type="checkbox" id="React" name="React" value="React"></input>
            <label htmlFor='React'>React</label>
        </div>
        <div className='flex checkbox'>
            <input type="checkbox" id="Angular" name="Angular" value="Angular"></input>
            <label htmlFor='Angular'>Angular</label>
        </div>
        
    </div>
  );
}

export default Sidebar;