import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image, TouchableOpacity, FlatList, ImageBackground,
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
        return { snek_counter: previousState.snek_counter + (caseAdd + chimpAdd + sabotageAdd + ibvetAdd + securitizeAdd + djsolAdd + insidertradeAdd + makemarketAdd + mbsAdd + mercerAdd) / 10 };
      });
    }, 100);
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

    const {
      snek_counter,
      snek_rewards,
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
    if (snek_counter > 9 && snek_rewards.length < 1) {
      const interview = {
        id: 1,
        snekPoints: 10,
        title: 'Get Case Interview Secrets',
        countLabel: 'Books Purchased: ',
        rate: 1,
        background: 'https://images.gr-assets.com/books/1340744133l/15056959.jpg',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(interview) }));
      // this.setState({ reset_state: true });
    }

    if (snek_counter > 19 && snek_rewards.length < 2) {
      const chimp = {
        id: 2,
        snekPoints: 20,
        title: 'WSO Senior Chimp',
        countLabel: 'Senior Chimps: ',
        rate: 2,
        background: 'https://static1.squarespace.com/static/53adf1a4e4b07a4f011714d8/57c10cb92994ca2851619b9f/57eff43d725e25e9149ec2e4/1475343421903/Wall+Street+Oasis.jpg?format=1000w',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(chimp) }));
      // this.setState({ reset_state: true });
    }

    if (snek_counter > 499 && snek_rewards.length < 3) {
      const sabotage = {
        id: 3,
        snekPoints: 500,
        title: 'Sabotage Interview of Friend',
        countLabel: 'Friends Sabotaged: ',
        rate: 50,
        background: 'https://image.shutterstock.com/image-vector/rejected-red-square-grunge-stamp-260nw-335102924.jpg',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(sabotage) }));
    }

    if (snek_counter > 9999 && snek_rewards.length < 4) {
      const ibvet = {
        id: 4,
        snekPoints: 10000,
        title: 'Two Year IB Veteran',
        countLabel: 'IB Vets: ',
        rate: 500,
        background: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/200px-Goldman_Sachs.svg.png',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(ibvet) }));
    }

    if (snek_counter > 99999 && snek_rewards.length < 5) {
      const securitize = {
        id: 5,
        snekPoints: 100000,
        title: 'Securitize a Snek Farm',
        countLabel: 'Snek Farms: ',
        rate: 5000,
        background: 'https://www.businessdayonline.com/wp-content/uploads/2016/12/snake_farm.jpg',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(securitize) }));
    }

    if (snek_counter > 499999 && snek_rewards.length < 6) {
      const djsol = {
        id: 6,
        snekPoints: 500000,
        title: 'Party with DJ Sol',
        countLabel: 'Parties: ',
        rate: 10000,
        background: 'https://nyppagesix.files.wordpress.com/2018/07/dj-goldman-saks.jpg?quality=90&strip=all&w=618&h=410&crop=1',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(djsol) }));
    }

    if (snek_counter > 999999 && snek_rewards.length < 7) {
      const insidertrade = {
        id: 7,
        snekPoints: 1000000,
        title: 'Insider Trade with Stevey',
        countLabel: 'Insider Trades: ',
        rate: 25000,
        background: 'https://image.shutterstock.com/image-vector/vector-illustration-cartoon-thief-260nw-130235285.jpg',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(insidertrade) }));
    }

    if (snek_counter > 12499999 && snek_rewards.length < 8) {
      const makemarket = {
        id: 8,
        snekPoints: 12500000,
        title: 'Make Markets with Ken',
        countLabel: 'Markets Made: ',
        rate: 100000,
        background: 'https://s3.amazonaws.com/lowres.cartoonstock.com/food-drink-biblical-feeding_of_the_5000-bread-fish-feed_the_5000-jlo0174_low.jpg',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(makemarket) }));
    }

    if (snek_counter > 49999999 && snek_rewards.length < 9) {
      const mbs = {
        id: 9,
        snekPoints: 50000000,
        title: 'Crash Economy with MBSs',
        countLabel: 'Economies Crashed: ',
        rate: 1000000,
        background: 'http://www.internationalinvestment.net/wp-content/uploads/2016/04/MBS-image-740x360.jpg',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(mbs) }));
    }

    // god mode
    if (snek_counter > 9999999999 && snek_rewards.length < 10) {
      const mercer = {
        id: 10,
        snekPoints: 10000000000,
        title: 'Rig Presidency with Bob Mercer',
        countLabel: 'Presidencies Rigged: ',
        rate: 100000000,
        background: 'https://betanews.com/wp-content/uploads/2017/06/cartoon-trump-flag-600x375.jpg',
      };
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(mercer) }));
    }

    const currentSnekRate = caseNum + 2 * chimpNum + 50 * sabotageNum + 500 * ibvetNum + 5000 * securitizeNum + 10000 * djsolNum + 25000 * insidertradeNum + 100000 * makemarketNum + 1000000 * mbsNum + 100000000 * mercerNum;
    const itemNumArray = [caseNum, chimpNum, sabotageNum, ibvetNum, securitizeNum, djsolNum, insidertradeNum, makemarketNum, mbsNum, mercerNum];

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

        <View style={styles.countercontainer}>
          <Text style={styles.counter}>
            Snekiness:
            {' '}
            {Math.round(snek_counter)}
          </Text>
          <Text style={styles.counterstats}>
            {currentSnekRate}
            {currentSnekRate === 1 ? ' snek per second' : ' sneks per second'}
          </Text>
        </View>

        <ImageBackground source={{ uri: 'http://snake-cartoon-images.clipartonline.net/_/rsrc/1467889959504/home/cartoon-snake_6.png?height=320&width=320' }} style={{ width: '100%', height: '100%' }}>
          <View style={styles.flatlist}>
            <FlatList
              data={snek_rewards}
              style={styles.listcontainer}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => this._onPressRewards(item)}>
                  <ImageBackground source={{ uri: item.background }}
                    style={{
                      width: '100%', height: '100%', flex: 1,
                    }}
                    resizeMode="repeat"
                  >
                    <View style={styles.listcontainer}>
                      <Text style={styles.item}>{item.title}</Text>
                      <View style={styles.statscontainer}>
                        <Text style={styles.statsitem}>
                          {'Sneks: '}
                          {item.snekPoints}
                        </Text>
                        <Text style={styles.statsitem}>
                          {'Rate (sneks/s): '}
                          {item.rate}
                        </Text>
                        <Text style={styles.statsitem}>{item.countLabel + itemNumArray[item.id - 1]}</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              )}
            />
          </View>
        </ImageBackground>
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

  counterstats: {
    fontSize: 20,
  },

  listcontainer: {
    flexDirection: 'column',
    backgroundColor: 'rgba(255,255,255,.88)',
  },

  countercontainer: {
    flexDirection: 'column',
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
    flexDirection: 'column',
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },

  statscontainer: {
    flex: 1,
    flexDirection: 'row',
  },

  statsitem: {
    fontSize: 12,
    paddingLeft: 10,
  },
});

export default Press;
