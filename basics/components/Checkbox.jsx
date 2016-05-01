var Checkbox = React.createClass({
    getInitialState: function(){
        return { checked: true };
    },
    handleCheck: function(){
      this.setState({checked: !this.state.checked});
    },
    render: function(){
        var message = this.state.checked ? "I am checked!" : "I am not checked";
        
        return (          
          <div>
            <p>{message}</p>
            <input type="checkbox" defaultChecked={this.state.checked} onChange={this.handleCheck} /> check me
          </div>            
        );
    }
});

//React.render(<Checkbox />, document.getElementById('checkbox-container'));