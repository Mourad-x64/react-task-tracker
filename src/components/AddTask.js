import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert("Ajoutez une tâche !")
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Tâche</label>
                <input 
                    type='text'
                    placeholder="ajouter une tâche" 
                    value={text}                    
                    onChange={(e) => { setText(e.target.value) }} 
                />
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input 
                    type='text' 
                    placeholder="ajouter une date"
                    value={day}                    
                    onChange={(e) => { setDay(e.target.value) }}  
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Rappel</label>
                <input 
                    type='checkbox'
                    checked={reminder}
                    value={reminder}                    
                    onChange={(e) => { setReminder(e.currentTarget.checked) }}  
                />
            </div>
            
            <input type='submit' className='btn btn-block' value="Enregistrer la tâche"/>
        </form>
    )
}

export default AddTask
