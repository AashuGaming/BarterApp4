import React from 'react'

<TouchableOpacity
style={[styles.button,{marginTop:10}]}
onPress = {()=>{this.addItem(this.state.itemName, this.state.description)}}
>
    <Text style={{color:'#ffff', fontSize:18, fontWeight:'bold'}}> Add Item</Text>
</TouchableOpacity>

addItem=(itemName, description)=>{
    var userName = this.state.userName
    db.collection("exchange_requests").add({
        "userName" : userName,
        "itemName" : itemName,
        "description" : description
    })
    this.setState({
        itemName: '',
        description: ''
    })

    return Alert.alert(
        'Item ready to exchange',
        '',
        [
            {text: 'OK', onPress: ()=> {

                this.props.navigation.navigate('HomeScreen')
            }}
        ]
    );
}


renderItem = ( {item, i}) =>{
    console.log(item.item_name);
    return (
        <ListItem
        key={i}
        title={item.item_name}
        subTitle={item.description}
        titleStyle={{color: 'black', fontWeight: 'bold'}}
        rightElement={
            <TouchableOpacity style={styles.button}>
                <Text style={{color: '#ffff'}}>Exchange</Text>
            </TouchableOpacity>
        }
        bottomDivider
        />
    )
}

<FlatList
  keyExtractor={this.keyExtractor}
  data={this.state.allRequests}
  renderItem={this.renderItem}
  />