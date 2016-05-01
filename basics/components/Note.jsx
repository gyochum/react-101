var Note = React.createClass({
    getInitialState: function(){
      return { editing: false };  
    },
    edit: function(){
      this.setState({editing: true}); 
    },
    save: function(){
      var newNote = this.refs.note.getDOMNode().value;
      
      this.props.onChange(newNote, this.props.index);
      
      this.setState({editing: false});
    },
    remove: function(){
        this.props.onRemove(this.props.index);
    },
    renderDisplay: function(){
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit} className = "green">EDIT</button>
                    <button onClick={this.remove} className = "red">REMOVE</button>
                </span>
            </div>
        );
    },
    renderForm: function(){
        return (
          <div>  
            <textarea ref="note" defaultValue={this.props.children}></textarea>
            <button className="green" onClick={this.save}>SAVE</button>
          </div>
        );
    },
    render: function(){
        if(this.state.editing){
            return this.renderForm();
        }
        else{
            return this.renderDisplay();
        }
    }
});

var Board = React.createClass({
    propTypes: {
      count: function(props, propName){
          if(typeof props[propName] !== "number")
            return new Error("needs to be a number");
            
        if(props[propName] >= 100)
            return new Error("needs to be less than 100");
      }  
    },
    getInitialState: function(){
      return {
          notes: [
              'Take out the trash',
              'Go play football',
              'Clean the house'
          ]
      };  
    },
    update: function(text, index){
        var notes = this.state.notes;
        notes[index] = text;
        this.setState({ notes: notes });  
    },
    remove: function(index){
        var notes = this.state.notes;
        notes.splice(index, 1);
        this.setState({ notes: notes });
    },
    eachNote: function(note, index){
        return (
            <Note key={index} index={index} onChange={this.update} onRemove={this.remove}>{note}</Note>
        );
    },
   render: function(){
       return (
         <div className="board">
            {this.state.notes.map(this.eachNote)}
         </div>  
       );
   } 
});

React.render(<Board count={10} />, document.getElementById('note-container'));