import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image, TouchableOpacity, FlatList,
} from 'react-native';

class Press extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snek_counter: 0,
      snek_rewards: [],
      // reset_state: false,
      caseNum: 0,
      chimpNum: 0,
      mercerNum: 0,
    };
    this._onPressCounter = this._onPressCounter.bind(this);
    this._onPressRewards = this._onPressRewards.bind(this);

    // Toggle the state every second
    setInterval(() => {
      let caseAdd, chimpAdd, mercerAdd;
      if (this.state.caseNum > 0) {
        caseAdd = (1 * this.state.caseNum);
      } else {
        caseAdd = 0;
      }

      if (this.state.chimpNum > 0) {
        chimpAdd = (2 * this.state.chimpNum);
      } else {
        chimpAdd = 0;
      }


      // god mode
      if (this.state.mercerNum > 0) {
        mercerAdd = (100000 * this.state.mercerNum);
      } else {
        mercerAdd = 0;
      }

      this.setState((previousState) => {
        return { snek_counter: previousState.snek_counter + caseAdd + chimpAdd + mercerAdd };
      });
    }, 1000);
  }

  _onPressCounter() {
    this.setState(prevState => ({ snek_counter: prevState.snek_counter + 1 }));
  }

  _onPressRewards(item) {
    const currSnekPts = this.state.snek_counter - item.snekPoints;
    this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.slice(0, [Math.floor(currSnekPts / 10)]) }));

    if (item.id === 1) {
      this.setState(prevState => ({ snek_counter: prevState.snek_counter - item.snekPoints }));
      this.setState(prevState => ({ caseNum: prevState.caseNum + 1 }));
    } else if (item.id === 2) {
      this.setState(prevState => ({ snek_counter: prevState.snek_counter - item.snekPoints }));
      this.setState(prevState => ({ chimpNum: prevState.chimpNum + 1 }));
    } else if (item.id === 10) {
      this.setState(prevState => ({ snek_counter: prevState.snek_counter - item.snekPoints }));
      this.setState(prevState => ({ chimpNum: prevState.mercerNum + 1 }));
    }
  }


  render() {
    // if (this.state.snek_counter < 10 && this.state.reset_state) {
    //   this.setState(prevState => ({ snek_rewards: [] }));
    //   this.setState({ reset_state: false });
    // }

    if (this.state.snek_counter > 9 && this.state.snek_rewards.length < 1) {
      const interview = {
        id: 1,
        snekPoints: 10,
        title: 'Get Case Interview Secrets',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(interview) }));
      // this.setState({ reset_state: true });
    }

    if (this.state.snek_counter > 29 && this.state.snek_rewards.length < 2) {
      const chimp = {
        id: 2,
        snekPoints: 20,
        title: 'WSO Senior Chimp',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(chimp) }));
      // this.setState({ reset_state: true });
    }

    // god mode
    if (this.state.snek_counter > 9999999999 && this.state.snek_rewards.length < 10) {
      const mercer = {
        id: 10,
        snekPoints: 9999999999,
        title: 'Rig Presidency with Bob Mercer',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(mercer) }));
    }

    return (

      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={this._onPressCounter}>
            <Image
              style={styles.image}
              source={{ uri: 'http://www.acting-man.com/blog/media/2017/01/donadoll-1024x429.jpg' }}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.counter}>
          Snekiness:
            {' '}
            {this.state.snek_counter}
          </Text>
        </View>

        <View style={styles.flatlist}>
          <FlatList
            data={this.state.snek_rewards}
            renderItem={({ item }) => <TouchableOpacity onPress={() => this._onPressRewards(item)}><Text style={styles.item}>{item.title}</Text></TouchableOpacity>}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },

  counter: {
    fontWeight: 'bold',
    fontSize: 30,
  },

  image: {
    width: 400,
    height: 300,
  },

  flatlist: {
    alignSelf: 'stretch',
    marginLeft: 0,
    paddingRight: 0,
    flex: 1,
    backgroundColor: 'red',
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default Press;
