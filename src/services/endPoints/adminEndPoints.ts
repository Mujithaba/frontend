const adminRoutes = {
    allUsers :'/admin/getAllUsers',
    blockUser :'/admin/userBlock',
    unblockUser :'/admin/userUnblock',
    allTutors : '/admin/getAllTutors',
    blockTutor: '/admin/tutorBlock',
    unblockTutor: '/admin/tutorUnblock',
    categoryAdd: '/admin/addCategory',
    getCategories:'/admin/getCagories',
    categoryUnlist:'/admin/categoryUnlist',
    categorylist:'/admin/categorylist',
    categoryEdit:'/admin/categoryEdit',
    getCourse:'/admin/getCourse',
    getViewCourse:'/admin/getViewCourse',
    getUnapprovedCourse:'/admin/getUnapprovedCourse',
    courseApproved:'/admin/courseApprove',
    courseUnapproved:'/admin/courseUnapprove',
    reviewsFetch:'/admin/reviewsFetch',
    fetchAssignments:'/admin/fetchAssignments',
    getInstructor:'/admin/getInstructor',
}

export default adminRoutes