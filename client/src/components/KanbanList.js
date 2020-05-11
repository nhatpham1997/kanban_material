import React from 'react';
import KanbanCard from './KanbanCard';
import KanbanActionButton from './KanbanActionButton';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const ListContainer = styled.div`
    background-color: #ebecf0;
    border-radius: 3px;
    width: 300px;
    height: 100%;
    padding: 8px;
    margin-right: 8px;
`

const KanbanList = ({ title, cards, listID, index }) => {
    return(
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <ListContainer
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}>
                    <Droppable droppableId={String(listID)} type="card">
                        {provided => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                            <h4>{title}</h4>
                            {cards.map((card, index) => (
                                <KanbanCard
                                    key={card.id}
                                    index={index}
                                    text={card.text}
                                    id={card.id}
                                />
                            ))}
                            {provided.placeholder}
                            <KanbanActionButton listID={listID} />
                            </div>
                        )}
                    </Droppable>
                </ListContainer>
            )}
        </Draggable>
        
    );
};


export default KanbanList;
