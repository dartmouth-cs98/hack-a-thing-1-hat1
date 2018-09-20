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
      sabotageNum: 0,
      ibvetNum: 0,
      securitizeNum: 0,
      djsolNum: 0,
      insidertradeNum: 0,
      makemarketNum: 0,
      mbsNum: 0,
      mercerNum: 0,
    };
    this._onPressCounter = this._onPressCounter.bind(this);
    this._onPressRewards = this._onPressRewards.bind(this);

    // Toggle the state every second
    setInterval(() => {
      let caseAdd, chimpAdd, sabotageAdd, ibvetAdd, securitizeAdd, djsolAdd, insidertradeAdd, makemarketAdd, mbsAdd, mercerAdd;
      const {
        caseNum,
        chimpNum,
        sabotageNum,
        ibvetNum,
        securitizeNum,
        djsolNum,
        insidertradeNum,
        makemarketNum,
        mbsNum,
        mercerNum,
      } = this.state;

      if (caseNum > 0) {
        caseAdd = (1 * caseNum);
      } else {
        caseAdd = 0;
      }

      if (chimpNum > 0) {
        chimpAdd = (2 * chimpNum);
      } else {
        chimpAdd = 0;
      }

      if (sabotageNum > 0) {
        sabotageAdd = (50 * sabotageNum);
      } else {
        sabotageAdd = 0;
      }

      if (ibvetNum > 0) {
        ibvetAdd = (500 * ibvetNum);
      } else {
        ibvetAdd = 0;
      }

      if (securitizeNum > 0) {
        securitizeAdd = (5000 * securitizeNum);
      } else {
        securitizeAdd = 0;
      }

      if (djsolNum > 0) {
        djsolAdd = (10000 * djsolNum);
      } else {
        djsolAdd = 0;
      }

      if (insidertradeNum > 0) {
        insidertradeAdd = (25000 * insidertradeNum);
      } else {
        insidertradeAdd = 0;
      }

      if (makemarketNum > 0) {
        makemarketAdd = (100000 * makemarketNum);
      } else {
        makemarketAdd = 0;
      }

      if (mbsNum > 0) {
        mbsAdd = (1000000 * mbsNum);
      } else {
        mbsAdd = 0;
      }

      // god mode
      if (mercerNum > 0) {
        mercerAdd = (100000000 * mercerNum);
      } else {
        mercerAdd = 0;
      }

      this.setState((previousState) => {
        return { snek_counter: previousState.snek_counter + caseAdd + chimpAdd + sabotageAdd + ibvetAdd + securitizeAdd + djsolAdd + insidertradeAdd + makemarketAdd + mbsAdd + mercerAdd };
      });
    }, 1000);
  }

  _onPressCounter() {
    this.setState(prevState => ({ snek_counter: prevState.snek_counter + 1 }));
  }

  _onPressRewards(item) {
    const { snek_counter } = this.state;

    if (snek_counter >= item.snekPoints) {
      const currSnekPts = snek_counter - item.snekPoints;
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.slice(0, [Math.floor(currSnekPts / 10)]) }));

      if (item.id === 1) {
        this.setState(prevState => ({ snek_counter: prevState.snek_counter - item.snekPoints }));
        this.setState(prevState => ({ caseNum: prevState.caseNum + 1 }));
      } else if (item.id === 2) {
        this.setState(prevState => ({ snek_counter: prevState.snek_counter - item.snekPoints }));
        this.setState(prevState => ({ chimpNum: prevState.chimpNum + 1 }));
      } else if (item.id === 3) {
        this.setState(prevState => ({ snek_counter: prevState.snek_counter - item.snekPoints }));
        this.setState(prevState => ({ sabotageNum: prevState.sabotageNum + 1 }));
      } else if (item.id === 4) {
        this.setState(prevState => ({ snek_counter: prevState.snek_counter - item.snekPoints }));
        this.setState(prevState => ({ ibvetNum: prevState.ibvetNum + 1 }));
      } else if (item.id === 5) {
        this.setState(prevState => ({ snek_counter: prevState.snek_counter - item.snekPoints }));
        this.setState(prevState => ({ securitizeNum: prevState.securitizeNum + 1 }));
      } else if (item.id === 6) {
        this.setState(prevState => ({ snek_counter: prevState.snek_counter - item.snekPoints }));
        this.setState(prevState => ({ djsolNum: prevState.djsolNum + 1 }));
      } else if (item.id === 7) {
        this.setState(prevState => ({ snek_counter: prevState.snek_counter - item.snekPoints }));
        this.setState(prevState => ({ insidertradeNum: prevState.insidertradeNum + 1 }));
      } else if (item.id === 8) {
        this.setState(prevState => ({ snek_counter: prevState.snek_counter - item.snekPoints }));
        this.setState(prevState => ({ makemarketNum: prevState.makemarketNum + 1 }));
      } else if (item.id === 9) {
        this.setState(prevState => ({ snek_counter: prevState.snek_counter - item.snekPoints }));
        this.setState(prevState => ({ mbsNum: prevState.mbsNum + 1 }));
      } else if (item.id === 10) {
        this.setState(prevState => ({ snek_counter: prevState.snek_counter - item.snekPoints }));
        this.setState(prevState => ({ mercerNum: prevState.mercerNum + 1 }));
      }
    }
  }


  render() {
    // if (this.state.snek_counter < 10 && this.state.reset_state) {
    //   this.setState(prevState => ({ snek_rewards: [] }));
    //   this.setState({ reset_state: false });
    // }

    const { snek_counter, snek_rewards } = this.state;
    if (snek_counter > 9 && snek_rewards.length < 1) {
      const interview = {
        id: 1,
        snekPoints: 10,
        title: 'Get Case Interview Secrets',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(interview) }));
      // this.setState({ reset_state: true });
    }

    if (snek_counter > 19 && snek_rewards.length < 2) {
      const chimp = {
        id: 2,
        snekPoints: 20,
        title: 'WSO Senior Chimp',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(chimp) }));
      // this.setState({ reset_state: true });
    }

    if (snek_counter > 499 && snek_rewards.length < 3) {
      const sabotage = {
        id: 3,
        snekPoints: 500,
        title: 'Sabotage Interview of Friend',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(sabotage) }));
    }

    if (snek_counter > 9999 && snek_rewards.length < 4) {
      const ibvet = {
        id: 4,
        snekPoints: 10000,
        title: '2y IB Vet',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(ibvet) }));
    }

    if (snek_counter > 99999 && snek_rewards.length < 5) {
      const securitize = {
        id: 5,
        snekPoints: 100000,
        title: 'Securitize a Snek Farm',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(securitize) }));
    }

    if (snek_counter > 499999 && snek_rewards.length < 6) {
      const djsol = {
        id: 6,
        snekPoints: 500000,
        title: 'Party with DJ Sol',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(djsol) }));
    }

    if (snek_counter > 999999 && snek_rewards.length < 7) {
      const insidertrade = {
        id: 7,
        snekPoints: 1000000,
        title: 'Insider Trade with Stevey',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(insidertrade) }));
    }

    if (snek_counter > 12499999 && snek_rewards.length < 8) {
      const makemarket = {
        id: 8,
        snekPoints: 12500000,
        title: 'Make Markets with Ken',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(makemarket) }));
    }

    if (snek_counter > 49999999 && snek_rewards.length < 9) {
      const mbs = {
        id: 9,
        snekPoints: 50000000,
        title: 'Crash Economy with Mortgage Backed Securities',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(mbs) }));
    }

    // god mode
    if (snek_counter > 9999999999 && snek_rewards.length < 10) {
      const mercer = {
        id: 10,
        snekPoints: 10000000000,
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
            {snek_counter}
          </Text>
        </View>

        <View style={styles.flatlist}>
          <FlatList
            data={snek_rewards}
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
