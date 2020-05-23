import React, { Component } from 'react';
import KanbanList from './BoardPage/KanbanList';
import { connect } from 'react-redux';
import KanbanActionButton from './BoardPage/KanbanActionButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from '../actions';
import styled from 'styled-components';
import Header from './LayOut/Header';
import Menu from './LayOut/Menu';

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends Component {

  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }
    
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    )
  }

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      <div>
        <Header></Header>
        <Menu></Menu>
        <Droppable droppableId="all-lists" direction="horizontal" type="list" >
          {provided => (
            <AppContainer { ...provided.droppableProps} ref={provided.innerRef} >
              {lists.map((list, index) => (
                <KanbanList 
                  listID={list.id}
                  key={list.id}
                  title={list.title}
                  cards={list.cards} 
                  index={index}
                />
              ))}
              <KanbanActionButton list/>
            </AppContainer> 
          )}
        </Droppable>
      </div>
      </DragDropContext>
    );  
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
