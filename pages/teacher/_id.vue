<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- 讲师介绍 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">讲师介绍</span>
        </h2>
      </header>
      <div class="t-infor-wrap">
        <!-- 讲师基本信息 -->
        <section class="fl t-infor-box c-desc-content">
          <div class="mt20 ml20">
            <section class="t-infor-pic">
              <img style="width: 650px" height="700" :src="teacherInfo.avatar" alt>
        </section>
            <h3 class="hLh30">
              <span class="fsize24 c-333">
                {{ teacherInfo.name }}&nbsp;
                {{ teacherInfo.level === 1 ? '高级讲师' : '首席讲师' }}
              </span>
            </h3>
            <section class="mt10">
              <span class="t-tag-bg">{{ teacherInfo.intro }}</span>
            </section>
            <section class="t-infor-txt">
              <p class="mt20">
                {{teacherInfo.career}}
              </p>
            </section>
            <div class="clear"></div>
          </div>
        </section>
        <div class="clear"></div>
      </div>
      <section class="mt30">
        <div>
          <header class="comm-title all-teacher-title c-course-content">
            <h2 class="fl tac">
              <span class="c-333">主讲课程</span>
            </h2>
            <section class="c-tab-title">
              <a href="javascript: void(0)">&nbsp;</a>
            </section>
          </header>
          <!-- /无数据提示 开始-->
          <section class="no-data-wrap" v-if="courseInfo.length === 0">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
          </section>
          <!-- /无数据提示 结束-->
          <article class="comm-course-list">
            <ul class="of">
              <li v-for="course in courseInfo" :key="course.id">
                <div class="cc-l-wrap">
                  <section class="course-img">
                    <img :src="course.cover" width="270" height="150" alt>
                    <div class="cc-mask">
                      <nuxt-link :to="`/course/${course.id}`" title="开始学习" class="comm-btn c-btn-1">开始学习</nuxt-link>
                    </div>
                  </section>
                  <h3 class="hLh30 txtOf mt10">
                    <nuxt-link :to="`/course/${course.id}`" :title="course.title" class="course-title fsize18 c-333">{{course.title}}</nuxt-link>
                  </h3>
                </div>
              </li>
            </ul>
            <div class="clear"></div>
          </article>
        </div>
      </section>
    </section>
    <!-- /讲师介绍 结束 -->
  </div>
</template>
<script>
import teacher from "@/api/teacher";

export default {
  data() {
    return {
      teacherInfo: {},
      courseInfo: []
    }
  },
  created() {
    this.teacherInfo.id = this.$route.params.id
    this.getTeacherCourse(this.teacherInfo.id)
  },
  methods: {
    // 获取教师信息以及课程
    getTeacherCourse(id) {
      teacher.getTeacherCourse(id)
        .then(result => {
          this.teacherInfo = result.data.data.teacher
          this.courseInfo = result.data.data.courses
        })
    }
  }
};
</script>
