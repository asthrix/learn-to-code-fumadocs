import { CourseDetailPage } from "@/components/course-detail/CourseDetailPage";
import { reactCourseDetail } from "@/lib/course-detail/react";

// ============================================================================
// React Course Page (Refactored - DRY & SOLID Principles)
// ============================================================================
// Before: 24 lines with repeated section imports and manual composition
// After: 5 lines using template component
//
// Benefits:
// - DRY: No code duplication across course variants
// - SRP: Page only responsible for providing data
// - OCP: Can extend CourseDetailPage without modifying this file
// - Maintainability: Layout changes only need to be made in one place
// ============================================================================

export default function ReactCoursePage() {
   return <CourseDetailPage courseDetail={reactCourseDetail} />;
}
