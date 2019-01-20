import React from 'react'
import {View} from 'react-native'

const Checklists = ({ lists, onCheckPress }) => (
    <View>
        {
            lists.map((list,index) => (
                <CheckList key={index} check={this.check} checks={c} category={category} season={this.state.season} />
            ))
        }
    </View>
);

export default Checklists;