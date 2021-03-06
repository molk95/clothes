import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import '../directory/directory.styles.scss'

class Directory extends React.Component {
    state = { sections: [
        {
            title: 'Chapeaux',
            imageUrl: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
            id: 1,
            linkUrl: 'chapeaux'
        },
        {
            title: 'Jackets',
            imageUrl: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGphY2tldHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            id: 2,
            linkUrl: ' '
        },
        {
            title: 'baskets',
            imageUrl: 'https://images.unsplash.com/photo-1612902376491-7a8a99b424e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            
            id: 3,
            linkUrl: ' '
        },
        {
            title: 'Femmes',
            imageUrl: 'https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            size: 'large',

            id: 4,
            linkUrl: ' '
        },
        {
            title: 'Hommes',
            imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RoaW5nJTIwbWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            size: 'large',
            id: 5,
            linkUrl: ' '
        },

    ] }
    render() {
        const {sections} = this.state 
        return ( 
            <div className="directory-menu">
                {sections.map(({id, ...otherSectionProps}) => ( 
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
         );
    }
}
 
export default Directory;