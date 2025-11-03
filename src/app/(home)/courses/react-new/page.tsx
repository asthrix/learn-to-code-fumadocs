import { CourseDetailPage } from "@/components/course-detail/CourseDetailPage";
import { newReactCourseDetail } from "@/lib/course-detail/react-new";

// ============================================================================
// React Launchpad Course Page (Refactored - DRY & SOLID Principles)
// ============================================================================

export default function ReactLaunchpadCoursePage() {
   return <CourseDetailPage courseDetail={newReactCourseDetail} />;
}
