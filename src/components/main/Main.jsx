import "./Main.css";
import "./Form.css";

export function Main() {
  return (
    <main className="main-content">
      <h1 className="main-title">Darbų planavimo platforma</h1>
      <div className="lightbox" data-visible="false">
        <div className="background"></div>
        <form className="form-create">
          <fieldset className="form-row">
            <label className="label" htmlFor="task">
              Task
            </label>
            <input className="input" id="task" type="text" required />
          </fieldset>
          <div className="columns">
            <fieldset className="form-row">
              <label className="label" htmlFor="deadline">
                Deadline
              </label>
              <input
                className="input"
                id="deadline"
                type="date"
                value="2024-09-03"
                min="2024-09-03"
                max="2025-09-03"
                required
              />
            </fieldset>
            <fieldset className="form-row">
              <label className="label" htmlFor="color">
                Color
              </label>
              <input className="input" id="color" type="color" required />
            </fieldset>
          </div>
          <fieldset className="form-row columns">
            <button className="btn" type="reset">
              Reset
            </button>
            <button className="btn" type="submit">
              Create
            </button>
          </fieldset>
          <div className="close">x</div>
        </form>
      </div>
      <section className="task-content">
        <div className="column">
          <h2 className="title">Todo</h2>
          <ul className="list">
            <li className="task">
              <div className="header">
                <div className="more">...</div>
                <div className="more-actions" data-visible="false">
                  <button type="button">Move up</button>
                  <button type="button">Move down</button>
                  <hr />
                  <button type="button">In progress</button>
                  <button type="button">Done</button>
                  <hr />
                  <button type="button">Delete</button>
                </div>
              </div>
              <div className="content">
                <p>Uzduoties tekstas</p>
              </div>
              <div className="footer">
                <p>Deadline: 2024-09-04</p>
              </div>
            </li>
            <li className="task">
              <div className="header">
                <div className="more">...</div>
                <div className="more-actions" data-visible="false">
                  <button type="button">Move up</button>
                  <button type="button">Move down</button>
                  <hr />
                  <button type="button">In progress</button>
                  <button type="button">Done</button>
                  <hr />
                  <button type="button">Delete</button>
                </div>
              </div>
              <div className="content">
                <p>Uzduoties tekstas</p>
              </div>
              <div className="footer">
                <p>Deadline: 2024-09-04</p>
              </div>
            </li>
            <li className="task">
              <div className="header">
                <div className="more">...</div>
                <div className="more-actions" data-visible="false">
                  <button type="button">Move up</button>
                  <button type="button">Move down</button>
                  <hr />
                  <button type="button">In progress</button>
                  <button type="button">Done</button>
                  <hr />
                  <button type="button">Delete</button>
                </div>
              </div>
              <div className="content">
                <p>Uzduoties tekstas: blocked</p>
              </div>
              <div className="footer">
                <p>Deadline: 2024-09-04</p>
              </div>
            </li>
            <li className="task">
              <div className="header">
                <div className="more">...</div>
                <div className="more-actions" data-visible="false">
                  <button type="button">Move up</button>
                  <button type="button">Move down</button>
                  <hr />
                  <button type="button">In progress</button>
                  <button type="button">Done</button>
                  <hr />
                  <button type="button">Delete</button>
                </div>
              </div>
              <div className="content">
                <p>Uzduoties tekstas</p>
              </div>
              <div className="footer">
                <p>Deadline: 2024-09-04</p>
              </div>
            </li>
            <li className="task">
              <div className="header">
                <div className="more">...</div>
                <div className="more-actions" data-visible="false">
                  <button type="button">Move up</button>
                  <button type="button">Move down</button>
                  <hr />
                  <button type="button">In progress</button>
                  <button type="button">Done</button>
                  <hr />
                  <button type="button">Delete</button>
                </div>
              </div>
              <div className="content">
                <p>Uzduoties tekstas</p>
              </div>
              <div className="footer">
                <p>Deadline: 2024-09-04</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="column">
          <h2 className="title">In progress</h2>
          <ul className="list">LIST...</ul>
        </div>
        <div className="column">
          <h2 className="title">Done</h2>
          <ul className="list">LIST...</ul>
        </div>
      </section>
      <div className="task-menu-background"></div>
    </main>
  );
}
