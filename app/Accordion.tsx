import React, { useState } from 'react'

export const Accordion = ({key, question, answer}: {key: number, question: string, answer: string}) => {

    const [isActive, setIsActive] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleAccordionClick = (key: number) => {
        setActiveIndex((prev) => (prev === key ? null : key))
        setIsActive(!isActive)
    }

    return (
        <div className="accordion-item">
            <button className="btn-accordion" onClick={() => handleAccordionClick(key)}>
                <div className="q-accord">{question}</div>
                <div className="plus-minus">{isActive ? '-' : '+'}</div>
            </button>
            {activeIndex === key && 
                <div>{isActive && <div className="accordion-content">{answer}</div>}</div>}
        </div>
    )
}
