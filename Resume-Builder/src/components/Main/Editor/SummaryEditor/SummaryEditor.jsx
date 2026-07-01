import './SummaryEditor.css'

function Summary({ setSummary, summaryPlaceholder }) {
    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eveniet vero nihil, vel corrupti exercitationem recusandae dolor modi earum, illum, ipsa quisquam vitae. Nulla tenetur fugit similique et nihil expedita."
    return <div className="editor summary-editor">
        <h2>Summary</h2>

        <label htmlFor="summary">Enter short summary:</label>
        <textarea name="summary" id="summary" placeholder={summaryPlaceholder}
            onChange={e => setSummary(e.target.value)}></textarea>
    </div>
}

export default Summary;