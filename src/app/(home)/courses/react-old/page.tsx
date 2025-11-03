import { CourseDetailPage } from "@/components/course-detail/CourseDetailPage";
import { oldReactCourseDetail } from "@/lib/course-detail/react-old";

// ============================================================================
// React Old Course Page (Refactored - DRY & SOLID Principles)
// ============================================================================

export default function ReactOldCoursePage() {
   return <CourseDetailPage courseDetail={oldReactCourseDetail} />;
}
