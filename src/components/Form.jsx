export const Form = ({ tipo }) => {
    return (
        <form action="" className="formulario" method="POST">
            <input type="hidden" name="tipo" value={tipo} />
            <div className="campo">
                <label htmlFor="company">Company:</label>
                <input type="text" placeholder="Your company" id="company" name="company" />
            </div>

            <div className="campo">
                <label htmlFor="email">Email address:</label>
                <input type="email" placeholder="Your email" id="email" name="email" />
            </div>

            <div className="campo">
                <label htmlFor="emailConfirm">Your email again as verification:</label>
                <input type="email" placeholder="Your email again" id="emailConfirm" />
            </div>

            <div className="campo">
                <label htmlFor="phone">Phone:</label>
                <input type="text" placeholder="Your phone number" id="phone" name="phone" />
            </div>

            <div className="campo">
                <label htmlFor="date">Time expectation to onborarding in you study: </label>
                <input type="date" placeholder="Select a day" id="date" name="date" />
            </div>

            <div className="campo">
                <label htmlFor="comment">Comment:</label>
                <input type="text" placeholder="Any comments" id="comment" name="comment" />
            </div>

            <button className="btn-submit" type="submit" disabled>Send</button>
        </form>
    )
}
