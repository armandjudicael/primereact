const ToggleButtonProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'onIcon',
        type: 'string',
        default: 'null',
        description: 'Icon for the on state.'
    },
    {
        name: 'offIcon',
        type: 'string',
        default: 'null',
        description: 'Icon for the off state.'
    },
    {
        name: 'onLabel',
        type: 'string',
        default: 'yes',
        description: 'Label for the on state.'
    },
    {
        name: 'offLabel',
        type: 'string',
        default: 'no',
        description: 'Label for the off state.'
    },
    {
        name: 'style',
        type: 'string',
        default: 'null',
        description: 'Inline style of the element.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the element.'
    },
    {
        name: 'checked',
        type: 'boolean',
        default: 'false',
        description: 'Specifies the on/off state of the button.'
    },
    {
        name: 'tabIndex',
        type: 'number',
        default: '0',
        description: 'Index of the element in tabbing order.'
    },
    {
        name: 'iconPos',
        type: 'string',
        default: 'left',
        description: 'Position of the icon, valid values are "left" and "right".'
    },
    {
        name: 'tooltip',
        type: 'any',
        default: 'null',
        description: 'Content of the tooltip.'
    },
    {
        name: 'tooltipOptions',
        type: 'object',
        default: 'null',
        description: 'Configuration of the tooltip, refer to the tooltip documentation for more information.'
    },
    {
        name: 'ariaLabelledBy',
        type: 'string',
        default: 'null',
        description: 'Establishes relationships between the component and label(s) where its value should be one or more element IDs.'
    }
];

const ToggleButtonEvents = [

];

const ToggleButtonStyles = [
    { name: 'p-togglebutton', description: 'Container element' },
    { name: 'p-button-icon-left', description: 'Icon element.' },
    { name: 'p-button-text', description: 'Label element.' }
];

module.exports = {
    togglebutton: {
        name: 'ToggleButton',
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/togglebutton',
        props: ToggleButtonProps,
        events: ToggleButtonEvents,
        styles: ToggleButtonStyles
    }
};