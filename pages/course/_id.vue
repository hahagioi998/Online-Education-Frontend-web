<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程详情 开始 -->
    <section class="container">
      <section class="path-wrap txtOf hLh30">
        <nuxt-link to="/" title class="c-999 fsize14">首页</nuxt-link>
        \
        <a href="#" title class="c-999 fsize14">{{courseWebInfo.subjectParentTitle}}</a>
        \
        <span class="c-333 fsize14">{{courseWebInfo.subjectTitle}}</span>
      </section>
      <div>
        <article class="c-v-pic-wrap" style="height: 357px;">
          <section class="p-h-video-box" id="videoPlay">
            <img :src="courseWebInfo.cover" alt width="640" height="358" class="dis  c-v-pic">
          </section>
        </article>
        <aside class="c-attr-wrap">
          <section class="ml20 mr15">
            <h2 class="hLh30 txtOf mt15">
              <span class="c-fff fsize24">{{courseWebInfo.title}}</span>
            </h2>
            <section class="c-attr-jg">
              <span class="c-fff">价格：</span>
              <b class="c-yellow" style="font-size:24px;">￥{{courseWebInfo.price}}</b>
            </section>
            <section class="c-attr-mt c-attr-undis">
              <span class="c-fff fsize14">主讲: {{courseWebInfo.teacherName}}</span>
            </section>
            <section class="c-attr-mt of">
              <span class="ml10 vam">
                <em class="icon18 scIcon"></em>
                如未登录请先登录
              </span>
            </section>
            <section class="c-attr-mt">
              <a v-if="buyCourse()" href="#" title="立即观看" class="comm-btn c-btn-3">立即观看</a>
              <a v-else @click="createOrder()" href="#" title="立即购买" class="comm-btn c-btn-3">立即购买</a>
            </section>
          </section>
        </aside>
        <aside class="thr-attr-box">
          <ol class="thr-attr-ol">
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">购买数</span>
                <br>
                <h6 class="c-fff f-fM mt10">{{courseWebInfo.buyCount}}</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">课时数</span>
                <br>
                <h6 class="c-fff f-fM mt10">{{courseWebInfo.lessonNum}}</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">浏览数</span>
                <br>
                <h6 class="c-fff f-fM mt10">{{courseWebInfo.viewCount}}</h6>
              </aside>
            </li>
          </ol>
        </aside>
        <div class="clear"></div>
      </div>
      <!-- /课程封面介绍 -->
      <div class="mt20 c-infor-box">
        <article class="fl col-7">
          <section class="mr30">
            <div class="i-box">
              <div>
                <section id="c-i-tabTitle" class="c-infor-tabTitle c-tab-title">
                  <a name="c-i" class="current" title="课程详情">课程详情</a>
                </section>
              </div>
              <article class="ml10 mr10 pt20">
                <div>
                  <h6 class="c-i-content c-infor-title">
                    <span>课程介绍</span>
                  </h6>
                  <div class="course-txt-body-wrap">
                    <section v-html="courseWebInfo.description" class="course-txt-body">
                      <p>
                        {{courseWebInfo.description}}
                      </p>
                    </section>
                  </div>
                </div>
                <!-- /课程介绍 -->
                <div class="mt50">
                  <h6 class="c-g-content c-infor-title">
                    <span>课程大纲</span>
                  </h6>
                  <section class="mt20">
                    <div class="lh-menu-wrap">
                      <menu id="lh-menu" class="lh-menu mt10 mr10">
                        <ul>
                          <!-- 文件目录 -->
                          <li class="lh-menu-stair" v-for="(chapter, index) in chapterVideo">
                            <a href="javascript: void(0)" :title="chapter.title" class="current-1">
                              <em class="lh-menu-i-1 icon18 mr10"></em>{{chapter.title}}
                            </a>
                            <ol class="lh-menu-ol" style="display: block;">
                              <li class="lh-menu-second ml30" v-for="video in chapterVideo[index].children">
                                <nuxt-link v-if="buyCourse()" :to="'/player/' + video.videoSourceId" title>
                                  <span class="fr">
                                    <i class="free-icon vam mr10">立即观看</i>
                                  </span>
                                  <em class="lh-menu-i-2 icon16 mr5">&nbsp;</em>{{video.title}}
                                </nuxt-link>
                                <nuxt-link v-else-if="video.isFree === 1" :to="'/player/' + video.videoSourceId" title>
                                  <span class="fr">
                                    <i class="free-icon vam mr10">免费试听</i>
                                  </span>
                                  <em class="lh-menu-i-2 icon16 mr5">&nbsp;</em>{{video.title}}
                                </nuxt-link>
                                <nuxt-link :to="'/course/' + id"  v-else title>
                                  <span class="fr">
                                    <i class="free-icon vam mr10">请先购买</i>
                                  </span>
                                  <em class="lh-menu-i-2 icon16 mr5">&nbsp;</em>{{video.title}}
                                </nuxt-link>
                              </li>
                            </ol>
                          </li>
                        </ul>
                      </menu>
                    </div>
                  </section>
                </div>
                <!-- /课程大纲 -->
              </article>
            </div>
          </section>
        </article>
        <aside class="fl col-3">
          <div class="i-box">
            <div>
              <section class="c-infor-tabTitle c-tab-title">
                <nuxt-link :to="`/teacher/${courseWebInfo.teacherId}`" title>主讲讲师</nuxt-link>
              </section>
              <section class="stud-act-list">
                <ul style="height: 150px;">
                  <li>
                    <div class="u-face">
                      <nuxt-link :to="`/teacher/${courseWebInfo.teacherId}`">
                        <img :src="courseWebInfo.avatar" width="50" height="50" alt>
                      </nuxt-link>
                    </div>
                    <section class="hLh30 txtOf">
                      <nuxt-link :to="`/teacher/${courseWebInfo.teacherId}`" class="c-333 fsize16 fl" >{{courseWebInfo.teacherName}}</nuxt-link>
                    </section>
                    <section class="hLh20 txtOf">
                      <span class="c-999">{{courseWebInfo.intro}}</span>
                    </section>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </aside>
        <div class="clear"></div>
      </div>
    </section>
    <!-- /课程详情 结束 -->
    <comment :courseId="this.courseWebInfo.id"/>
  </div>
</template>

<script>
import course from "@/api/course";
import order from "@/api/order";
import cookie from "js-cookie"
import comment from "@/components/comment";

export default {
  components: {
    comment
  },
  asyncData({params, error}) {
    return course.getAllCourseInfo(params.id)
      .then(result => {
        console.log(result)
        return {
          courseWebInfo: result.data.data.courses,
          chapterVideo: result.data.data.chapters
        }
      })
  },
  data() {
    return {
      isBuyCourse: '',
      id: ''
    }
  },
  created() {
    this.id = this.$route.params.id
    // 查询课程购买状态
    order.isBuyCourse(this.courseWebInfo.id)
      .then(result => {
        this.isBuyCourse = result.data.code === 200
      })
  },
  methods: {
    // 生成订单
    createOrder() {
      if (!cookie.get('web-token')) {
        this.$message({
          type: 'error',
          message: '请先登录'
        })
        return false
      }
      order.createOrder(this.courseWebInfo.id)
        .then(result => {
          // 跳转到订单显示页面
          this.$router.push({
            path: `/order/${result.data.data.orderId}`
          })
        })
    },
    // 判断是否已购买课程
    buyCourse() {
      if (this.courseWebInfo.price === 0) {
        return true
      }
      return this.isBuyCourse
    }
  }
};
</script>
