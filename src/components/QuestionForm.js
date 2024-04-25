import { useState } from "react";

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')

    const isInputError = inputValue.includes('f')

    return (
        <div>
            <textarea value={inputValue} onChange={(e) => checkValue(e.target.value)} />

            {isInputError && (
                <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
            )}

            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )

    function checkValue(value) {
        if (!value.includes('f')) {
            setInputValue(value)
        }
    }
}

export default QuestionForm