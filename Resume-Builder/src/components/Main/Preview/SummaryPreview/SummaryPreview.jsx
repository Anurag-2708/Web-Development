import './SummaryPreview.css'

function SummaryPreview({ summary }) {
    return summary && <div className="summary-preview">
        <div className="section-heading">Summary</div>
        <p className="summary">{summary}</p>
    </div>
}

export default SummaryPreview;