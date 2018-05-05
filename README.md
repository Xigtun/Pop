# rn-global-modal

modal like native

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):


    $ npm install rn-global-modal
    $ yarn add rn-global-modal


## Examples

Here is a simple example of rn-global-modal being used in an app:

```jsx
import Pop from 'rn-global-modal'

render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this._showPop.bind(this)}>
          Show Pop
        </Text>

      </View>
    );
  }

  _showPop(){
      Pop.show(
          <View style={{height: 300, width: '80%', backgroundColor:'red'}}/>
          ,{animationType: 'slide-up', maskClosable: true, onMaskClose: ()=>{}})
  }

```


## Preview

![Preview](./preview.gif)