const Input = ({ userInput, onChangeInput }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="first">Principal Ammount</label>
          <input
            id="first"
            type="number"
            required
            name="initialInvestment"
            value={userInput.initialInvestment}
            onChange={(event) => onChangeInput(event.target.name, event.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="second">Interest Rate</label>
          <input
            id="second"
            type="number"
            required
            name="expectedReturn"
            value={userInput.expectedReturn}
            onChange={(event) => onChangeInput(event.target.name, event.target.value)
            }
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="third">Annual Investment Deposit</label>
          <input
            id="third"
            type="number"
            required
            name="annualInvestment"
            value={userInput.annualInvestment}
            onChange={(event) => onChangeInput(event.target.name, event.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="fourth">Duration</label>
          <input
            id="fourth"
            type="number"
            required
            name="duration"
            value={userInput.duration}
            onChange={(event) => onChangeInput(event.target.name, event.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
