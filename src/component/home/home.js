import React, {Component} from 'react';
import {Button} from 'antd-mobile';
import './css/home.less';
import { Carousel, Flex } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

class Home extends Component {
    state = {
        data: ['', '', ''],
        bannerData: [
            {
                imgUrl: 'https://haitao.nos.netease.com/peQOctM1q5P6Qxd0wz83P5Dd_01-02T1712072106_960_480.jpg?imageView&thumbnail=640x0&quality=75&type=webp',
                url: 'http://m.kaola.com/activity/h5/38467.shtml?ri=homepage&zid=1&zp=8&zn=banner'
            },
            {
                imgUrl: 'https://haitao.nos.netease.com/fgkvnsRcEMNmHevPPAmy9zN6AZGJ22222222_01T1712080031_960_480.jpg?imageView&thumbnail=640x0&quality=75&type=webp',
                url: 'https://m.kaola.com/activity/h5/38822.shtml?ri=homepage&zid=1&zp=1&zn=banner'
            },
            {
                imgUrl: 'https://haitao.nos.netease.com/HW8TQQAfAqikPzeAnzd1aOZRhN92cd8-1067_01T1712072309_960_480.jpg?imageView&thumbnail=640x0&quality=75&type=webp',
                url: 'http://m.kaola.com/activity/h5/38207.shtml?ri=homepage&zid=1&zp=2&zn=banner'
            }
        ],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
    }
    render() {
        return (
            <div id="main">
              <div className="header">
                  <div className="h-box">
                      <div className="h-inp">
                          <i className="lisicheng lisicheng-sousuo"></i>
                          <span>洗发水</span>
                      </div>
                      <div className="btns">
                          <a href="#">
                              <i className="lisicheng lisicheng-touxiang"></i>
                          </a>
                          <a href="#">
                              <i className="lisicheng lisicheng-gouwuche1"></i>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="banner">
                  <Carousel
                      autoplay={true}
                      infinite
                      selectedIndex={1}
                    >
                      {this.state.bannerData.map(obj => (
                        <a
                          key={obj}
                          href={obj.url}
                          style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                          <img
                            src={obj.imgUrl}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                              // fire window resize event to change height
                              window.dispatchEvent(new Event('resize'));
                              this.setState({ imgHeight: 'auto' });
                            }}
                          />
                        </a>
                      ))}
                    </Carousel>
                </div>

                <div className="select-list">
                    <Flex>
                        <Flex.Item>
                            <i className="lisicheng lisicheng-gouwuche"></i>
                            <p>考拉超市</p>
                        </Flex.Item>
                        <Flex.Item>
                            <i className="lisicheng lisicheng-guojiguojiadiquguanmorentai01"></i>
                            <p>国家馆</p>
                        </Flex.Item>
                        <Flex.Item>
                            <i className="lisicheng lisicheng-baozhang"></i>
                            <p>考拉保障</p>
                        </Flex.Item>
                        <Flex.Item>
                            <i className="lisicheng lisicheng-icon1"></i>
                            <p>拼团</p>
                        </Flex.Item>
                    </Flex>
                </div>

                <div className="activity">
                    <Flex>
                        <Flex.Item>
                            <img src="https://haitao.nos.netease.com/1c0ou267798_320_330.jpg?imageView&thumbnail=320x0&quality=75&type=webp" />
                        </Flex.Item>
                        <Flex.Item>
                            <img src="https://haitao.nos.netease.com/1c0ou292t57_320_330.jpg?imageView&thumbnail=320x0&quality=75&type=webp" />
                        </Flex.Item>
                    </Flex>
                    <div className="active-tit">
                        <span class="icon"></span>
                        <span class="text" style={{'margin':'0 10px'}}>12.12年终盛典</span>
                        <span class="icon"></span>
                    </div>
                    <div className="active-list">
                        <Flex>
                            <Flex.Item>
                                <img src="https://haitao.nos.netease.com/1c0oiubmu44_480_375.jpg?imageView&thumbnail=320x0&quality=75&type=webp" />
                            </Flex.Item>
                            <Flex.Item>
                                <img src="https://haitao.nos.netease.com/1c0oiufj834_480_375.jpg?imageView&thumbnail=320x0&quality=75&type=webp" />
                            </Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item>
                                <img src="https://haitao.nos.netease.com/1c0oiv1g592_480_375.jpg?imageView&thumbnail=320x0&quality=75&type=webp" />
                            </Flex.Item>
                            <Flex.Item>
                                <img src="https://haitao.nos.netease.com/1c0oqk55s18_480_375.jpg?imageView&thumbnail=320x0&quality=75&type=webp" />
                            </Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item>
                                <img src="https://haitao.nos.netease.com/1c0oivj0o23_480_375.jpg?imageView&thumbnail=320x0&quality=75&type=webp" />
                            </Flex.Item>
                            <Flex.Item>
                                <img src="https://haitao.nos.netease.com/1c0oj0ff587_480_375.jpg?imageView&thumbnail=320x0&quality=75&type=webp" />
                            </Flex.Item>
                        </Flex>
                    </div>
                    <div className="active-tit">
                        <i className="lisicheng lisicheng-xianshi"></i>
                        <span className="text">手机限时购</span>
                    </div>
                    <div className="m-ban">
                        <img src="https://haitao.nosdn1.127.net/iq9abcs826_640_350.jpg?imageView&thumbnail=640x0&quality=75&type=webp" />
                        <div class="desc">
                            <p class="desc_main">距本场结束还有03:27:07</p>
                            <p class="desc_btn">入场疯抢</p>
                        </div>
                        <div className="m-list">
                            <Flex>
                                <Flex.Item>
                                    <img src="https://haitao.nos.netease.com/79d1e7716b564941ba7952c78050844f1510293812713j9thxw3v17532.jpg?imageView&thumbnail=200x0&quality=75&type=webp" />
                                    <div className="goods-name">三石推荐 2件减30 男士羊毛圆领套衫 7色</div>
                                    <div className="money">
                                        <span className="price">￥280</span>
                                        <span className="old-price">￥500</span>
                                    </div>
                                </Flex.Item>
                                <Flex.Item>
                                    <img src="https://paopao.nosdn.127.net/41daa319-782c-43d0-8475-fe38fca6f9ac?imageView&thumbnail=200x0&quality=75&type=webp" />
                                    <div className="goods-name">TITIKA运动背心含胸垫速干健身瑜伽服</div>
                                    <div className="money">
                                        <span className="price">￥119</span>
                                        <span className="old-price">￥295</span>
                                    </div>
                                </Flex.Item>
                                <Flex.Item>
                                    <img src="https://pop.nosdn.127.net/b416970b-2cd1-425d-a841-ce83a88fe42d?imageView&thumbnail=200x0&quality=75&type=webp" />
                                    <div className="goods-name">TITIKA时尚印花抗磨损瑜伽裤-印花1184</div>
                                    <div className="money">
                                        <span className="price">￥407</span>
                                        <span className="old-price">￥479</span>
                                    </div>
                                </Flex.Item>
                            </Flex>
                        </div>
                    </div>
                    <div className="active-tit">
                        <i className="lisicheng lisicheng-remen"></i>
                        <span className="text">热门市场</span>
                    </div>
                    <div className="hot-market">
                        <div className="hot-list">
                            <ul>
                                <li><img src="https://haitao.nos.netease.com/1c0o9adpu35_320_160.jpg?imageView&type=webp&thumbnail=320x0&quality=95&" /></li>
                                <li><img src="https://haitao.nos.netease.com/1c0o9agk11_320_160.jpg?imageView&type=webp&thumbnail=320x0&quality=95&" /></li>
                                <li><img src="https://haitao.nos.netease.com/1c0o9bf7157_320_160.jpg?imageView&type=webp&thumbnail=320x0&quality=95&" /></li>
                                <li><img src="https://haitao.nos.netease.com/1c0o9bi4h78_320_160.jpg?imageView&type=webp&thumbnail=320x0&quality=95&" /></li>
                                <li><img src="https://haitao.nos.netease.com/1c0o9c3q841_320_160.jpg?imageView&type=webp&thumbnail=320x0&quality=95&" /></li>
                                <li><img src="https://haitao.nos.netease.com/1c0o9c8h222_320_160.jpg?imageView&type=webp&thumbnail=320x0&quality=95&" /></li>
                                <li><img src="https://haitao.nos.netease.com/1c0o9mbl187_320_160.jpg?imageView&type=webp&thumbnail=320x0&quality=95&" /></li>
                                <li><img src="https://haitao.nos.netease.com/1c0o9mf0740_320_160.jpg?imageView&type=webp&thumbnail=320x0&quality=95&" /></li>
                                    <li><img src="https://haitao.nos.netease.com/1c0o9adpu35_320_160.jpg?imageView&type=webp&thumbnail=320x0&quality=95&" /></li>
                                    <li><img src="https://haitao.nos.netease.com/1c0o9agk11_320_160.jpg?imageView&type=webp&thumbnail=320x0&quality=95&" /></li>
                                    <li><img src="https://haitao.nos.netease.com/1c0o9bf7157_320_160.jpg?imageView&type=webp&thumbnail=320x0&quality=95&" /></li>
                                    <li><img src="https://haitao.nos.netease.com/1c0o9bi4h78_320_160.jpg?imageView&type=webp&thumbnail=320x0&quality=95&" /></li>
                                    <li><img src="https://haitao.nos.netease.com/1c0o9c3q841_320_160.jpg?imageView&type=webp&thumbnail=320x0&quality=95&" /></li>
                                    <li><img src="https://haitao.nos.netease.com/1c0o9c8h222_320_160.jpg?imageView&type=webp&thumbnail=320x0&quality=95&" /></li>
                                    <li><img src="https://haitao.nos.netease.com/1c0o9mbl187_320_160.jpg?imageView&type=webp&thumbnail=320x0&quality=95&" /></li>
                                    <li><img src="https://haitao.nos.netease.com/1c0o9mf0740_320_160.jpg?imageView&type=webp&thumbnail=320x0&quality=95&" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
