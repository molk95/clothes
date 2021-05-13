import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import '../directory/directory.styles.scss'

class Directory extends React.Component {
    state = { sections: [
        {
            title: 'Chapeaus',
            imageUrl: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
            id: 1
        },
        {
            title: 'Jackets',
            imageUrl: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGphY2tldHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            
            id: 2
        },
        {
            title: 'baskets',
            imageUrl: 'https://images.unsplash.com/photo-1612902376491-7a8a99b424e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            
            id: 3
        },
        {
            title: 'Femmes',
            imageUrl: 'https://images.unsplash.com/photo-1565127453543-ad97bbbba30d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            size: 'large',

            id: 4
        },
        {
            title: 'Hommes',
            imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RoaW5nJTIwbWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            size: 'large',
            id: 5
        },

    ] }
    render() { 
        return ( 
            <div className="directory-menu">
                {this.state.sections.map(({title,imageUrl, id, size}) => ( 
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
         );
    }
}
 
export default Directory;