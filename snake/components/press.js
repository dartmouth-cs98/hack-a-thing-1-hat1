import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image, TouchableOpacity, FlatList, ImageBackground,
} from 'react-native';
import FadeOutView from './FadeOutView';

class Press extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snek_counter: 0,
      snek_rewards: [],
      multiplierRate: 1.5,
      purchaseOptions: {
        interview: {
          id: 1,
          caseNum: 0,
          snekPoints: 10 * (multiplierRate ** caseNum),
          title: 'Get Case Interview Secrets',
          countLabel: 'Books Purchased: ',
          rate: 1,
          background: 'https://images.gr-assets.com/books/1340744133l/15056959.jpg',
        },
        chimp: {
          id: 2,
          chimpNum: 0,
          snekPoints: 20 * (multiplierRate ** chimpNum),
          title: 'Attain WSO Senior Chimp Status',
          countLabel: 'Silver Bananas Attained: ',
          rate: 2,
          background: 'https://static1.squarespace.com/static/53adf1a4e4b07a4f011714d8/57c10cb92994ca2851619b9f/57eff43d725e25e9149ec2e4/1475343421903/Wall+Street+Oasis.jpg?format=1000w',
        },
        sabotage: {
          id: 3,
          sabotageNum: 0,
          snekPoints: 500 * (multiplierRate ** sabotageNum),
          title: 'Sabotage Interview of "Friend"',
          countLabel: 'Friends Sabotaged: ',
          rate: 50,
          background: 'https://image.shutterstock.com/image-vector/rejected-red-square-grunge-stamp-260nw-335102924.jpg',
        },
        ibvet: {
          id: 4,
          ibvetNum: 0,
          snekPoints: 10000 * (multiplierRate ** ibvetNum),
          title: 'Become Two Year IB Veteran',
          countLabel: 'Live Deals Done: ',
          rate: 500,
          background: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/200px-Goldman_Sachs.svg.png',
        },
        securitize: {
          id: 5,
          securitizeNum: 0,
          snekPoints: 100000 * (multiplierRate ** securitizeNum),
          title: 'Securitize a Snek Farm',
          countLabel: 'Snek Farms: ',
          rate: 5000,
          background: 'https://www.businessdayonline.com/wp-content/uploads/2016/12/snake_farm.jpg',
        },
        djsol: {
          id: 6,
          djsolNum: 0,
          snekPoints: 500000 * (multiplierRate ** djsolNum),
          title: 'Party with DJ Sol',
          countLabel: 'Parties: ',
          rate: 10000,
          background: 'https://nyppagesix.files.wordpress.com/2018/07/dj-goldman-saks.jpg?quality=90&strip=all&w=618&h=410&crop=1',
        },
        insidertrade: {
          id: 7,
          insidertradeNum: 0,
          snekPoints: 1000000 * (multiplierRate ** insidertradeNum),
          title: 'Insider Trade with Stevey',
          countLabel: 'Insider Trades: ',
          rate: 25000,
          background: 'https://image.shutterstock.com/image-vector/vector-illustration-cartoon-thief-260nw-130235285.jpg',
        },
        makemarket: {
          id: 8,
          makemarketNum: 0,
          snekPoints: 12500000 * (multiplierRate ** makemarketNum),
          title: 'Make Markets with Ken',
          countLabel: 'Markets Made: ',
          rate: 100000,
          background: 'https://s3.amazonaws.com/lowres.cartoonstock.com/food-drink-biblical-feeding_of_the_5000-bread-fish-feed_the_5000-jlo0174_low.jpg',
        },
        mbs: {
          id: 9,
          mbsNum: 0,
          snekPoints: 50000000 * (multiplierRate ** mbsNum),
          title: 'Crash Economy with MBSs',
          countLabel: 'Economies Crashed: ',
          rate: 1000000,
          background: 'http://www.internationalinvestment.net/wp-content/uploads/2016/04/MBS-image-740x360.jpg',
        },
        mercer: {
          id: 10,
          mercerNum: 0,
          snekPoints: 10000000000 * (multiplierRate ** mercerNum),
          title: 'Rig Presidency with Bob Mercer',
          countLabel: 'Presidencies Rigged: ',
          rate: 100000000,
          background: 'https://betanews.com/wp-content/uploads/2017/06/cartoon-trump-flag-600x375.jpg',
        },
      },
      clicked: false,
    };
    this._onPressCounter = this._onPressCounter.bind(this);
    this._onPressRewards = this._onPressRewards.bind(this);
    this.renderItem = this.renderItem.bind(this);

    // Toggle the state every second
    setInterval(() => {
      let caseAdd, chimpAdd, sabotageAdd, ibvetAdd, securitizeAdd, djsolAdd, insidertradeAdd, makemarketAdd, mbsAdd, mercerAdd;
      const {
        purchaseOptions,
      } = this.state;

      if (purchaseOptions.interview.caseNum > 0) {
        caseAdd = (1 * purchaseOptions.interview.caseNum);
      } else {
        caseAdd = 0;
      }

      if (purchaseOptions.chimp.chimpNum > 0) {
        chimpAdd = (2 * purchaseOptions.chimp.chimpNum);
      } else {
        chimpAdd = 0;
      }

      if (purchaseOptions.sabotage.sabotageNum > 0) {
        sabotageAdd = (50 * purchaseOptions.sabotage.sabotageNum);
      } else {
        sabotageAdd = 0;
      }

      if (purchaseOptions.ibvet.ibvetNum > 0) {
        ibvetAdd = (500 * purchaseOptions.ibvet.ibvetNum);
      } else {
        ibvetAdd = 0;
      }

      if (purchaseOptions.securitize.securitizeNum > 0) {
        securitizeAdd = (5000 * purchaseOptions.securitize.securitizeNum);
      } else {
        securitizeAdd = 0;
      }

      if (purchaseOptions.djsol.djsolNum > 0) {
        djsolAdd = (10000 * purchaseOptions.djsol.djsolNum);
      } else {
        djsolAdd = 0;
      }

      if (purchaseOptions.insidertrade.insidertradeNum > 0) {
        insidertradeAdd = (25000 * purchaseOptions.insidertrade.insidertradeNum);
      } else {
        insidertradeAdd = 0;
      }

      if (purchaseOptions.makemarket.makemarketNum > 0) {
        makemarketAdd = (100000 * purchaseOptions.makemarket.makemarketNum);
      } else {
        makemarketAdd = 0;
      }

      if (purchaseOptions.mbs.mbsNum > 0) {
        mbsAdd = (1000000 * purchaseOptions.mbs.mbsNum);
      } else {
        mbsAdd = 0;
      }

      // god mode
      if (purchaseOptions.mercer.mercerNum > 0) {
        mercerAdd = (100000000 * purchaseOptions.mercer.mercerNum);
      } else {
        mercerAdd = 0;
      }

      this.setState((previousState) => {
        return { snek_counter: previousState.snek_counter + (caseAdd + chimpAdd + sabotageAdd + ibvetAdd + securitizeAdd + djsolAdd + insidertradeAdd + makemarketAdd + mbsAdd + mercerAdd) / 10, clicked: false };
      });
    }, 150);
  }

  getNumAbbreviation(num) {
    if (num < 1000) {
      return num;
    } else if (num < 1000000) {
      return `${(num / 1000).toFixed(3)} thousand`;
    } else if (num < 1000000000) {
      return `${(num / 1000000).toFixed(3)} million`;
    } else if (num < 1000000000000) {
      return `${(num / 1000000000).toFixed(3)} billion`;
    } else if (num < 1000000000000000) {
      return `${(num / 1000000000000).toFixed(3)} trillion`;
    } else if (num < 1000000000000000000) {
      return `${(num / 1000000000000000).toFixed(3)} quadrillion`;
    } else if (num < 1000000000000000000000) {
      return `${(num / 1000000000000000000).toFixed(3)} quintillion`;
    } else if (num < 1000000000000000000000000) {
      return `${(num / 1000000000000000000000).toFixed(3)} sextillion`;
    } else if (num < 1000000000000000000000000000) {
      return `${(num / 1000000000000000000000000).toFixed(3)} septillion`;
    } else if (num < 1000000000000000000000000000000) {
      return `${(num / 1000000000000000000000000000).toFixed(3)} octillion`;
    } else if (num < 1000000000000000000000000000000000) {
      return `${(num / 1000000000000000000000000000000).toFixed(3)} nonillion`;
    } else if (num < 1000000000000000000000000000000000000) {
      return `${(num / 1000000000000000000000000000000000).toFixed(3)} decillion`;
    } else {
      return 'Too many';
    }
  }

  _onPressCounter() {
    this.setState(prevState => ({ snek_counter: prevState.snek_counter + 1, clicked: true }));
  }

  _onPressRewards(item) {
    const { snek_counter } = this.state;

    if (snek_counter >= item.snekPoints) {
      // const currSnekPts = snek_counter - item.snekPoints;
      this.setState(prevState => ({ snek_rewards: [] }));

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

  renderItem(item, itemNumArray) {
    return (
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
    );
  }

  render() {
    // if (this.state.snek_counter < 10 && this.state.reset_state) {
    //   this.setState(prevState => ({ snek_rewards: [] }));
    //   this.setState({ reset_state: false });
    // }


    /** Refactor This * */
    const {
      snek_counter,
      snek_rewards,
      purchaseOptions,
      multiplierRate,
      clicked,
    } = this.state;

    if (snek_counter > (10 * (multiplierRate ** purchaseOptions.interview.caseNum) - 1) && snek_rewards.filter(snek => (snek.id === 1))) {
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(purchaseOptions.interview) }));
    }

    if (snek_counter > (20 * (multiplierRate ** purchaseOptions.chimp.chimpNum) - 1) && snek_rewards.filter(snek => (snek.id === 2))) {
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(purchaseOptions.chimp) }));
    }

    if (snek_counter > (500 * (multiplierRate ** purchaseOptions.sabotage.sabotageNum) - 1) && snek_rewards.filter(snek => (snek.id === 3))) {
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(purchaseOptions.sabotage) }));
    }

    if (snek_counter > (10000 * (multiplierRate ** purchaseOptions.ibvet.ibvetNum) - 1) && snek_rewards.filter(snek => (snek.id === 4))) {
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(purchaseOptions.ibvet) }));
    }

    if (snek_counter > (100000 * (multiplierRate ** purchaseOptions.securitize.securitizeNum) - 1) && snek_rewards.length < 5) {
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(purchaseOptions.securitize) }));
    }

    if (snek_counter > (500000 * (multiplierRate ** purchaseOptions.djsol.djsolNum) - 1) && snek_rewards.length < 6) {
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(djsol) }));
    }

    if (snek_counter > (1000000 * (multiplierRate ** purchaseOptions.insidertrade.insidertradeNum) - 1) && snek_rewards.length < 7) {
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(insidertrade) }));
    }

    if (snek_counter > (12500000 * (multiplierRate ** purchaseOptions.makemarket.makemarketNum) - 1) && snek_rewards.length < 8) {
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(makemarket) }));
    }

    if (snek_counter > (50000000 * (multiplierRate ** purchaseOptions.mbs.mbsNum) - 1) && snek_rewards.length < 9) {
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(mbs) }));
    }

    if (snek_counter > (10000000000 * (multiplierRate ** purchaseOptions.mercer.mercerNum) - 1) && snek_rewards.length < 10) {
      this.setState(prevState => ({ snek_rewards: prevState.snek_rewards.concat(mercer) }));
    }

    const currentSnekRate = purchaseOptions.interview.caseNum + 2 * purchaseOptions.chimp.chimpNum + 50 * purchaseOptions.sabotage.sabotageNum + 500 * purchaseOptions.ibvet.ibvetNum + 5000 * purchaseOptions.securitize.securitizeNum + 10000 * purchaseOptions.djsol.djsolNum + 25000 * purchaseOptions.insidertrade.insidertradeNum + 100000 * purchaseOptions.makemarket.makemarketNum + 1000000 * purchaseOptions.mbs.mbsNum + 100000000 * purchaseOptions.mercer.mercerNum;
    const itemNumArray = [purchaseOptions.interview.caseNum, purchaseOptions.chimp.chimpNum, purchaseOptions.sabotage.sabotageNum, purchaseOptions.ibvet.ibvetNum, purchaseOptions.securitize.securitizeNum, purchaseOptions.djsol.djsolNum, purchaseOptions.insidertrade.insidertradeNum, purchaseOptions.makemarket.makemarketNum, purchaseOptions.mbs.mbsNum, purchaseOptions.mercer.mercerNum];

    const snakeX = Math.random() * 60 + 20;
    const snakeY = Math.random() * 60 + 20;
    const snakeXString = `${parseInt(snakeX, 10)}%`;
    const snakeYString = `${parseInt(snakeY, 10)}%`;

    let clickAnimation = '';
    if (clicked) {
      clickAnimation = (
        <FadeOutView style={{
          position: 'absolute',
          bottom: snakeXString,
          right: snakeYString,
          width: 50,
          height: 50,
        }}
        >
          <Image
            style={{ width: 75, height: 75 }}
            source={require('../assets/snake.png')}
            resizeMode="contain"
          />
        </FadeOutView>
      );
      // this.setState(prevState => ({ clicked: false }));
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
          {clickAnimation}
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

        <ImageBackground source={{ uri: 'http://snake-cartoon-images.clipartonline.net/_/rsrc/1467889959504/home/cartoon-snake_6.png?height=320&width=320' }} style={{ width: '100%', height: '100%', flex: 1 }}>
          <View style={styles.flatlist}>
            <FlatList
              data={snek_rewards}
              style={styles.listcontainer}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => this._onPressRewards(item)}>
                  {this.renderItem(item, itemNumArray)}
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
    flex: 1,
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
    // alignSelf: 'stretch',
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
