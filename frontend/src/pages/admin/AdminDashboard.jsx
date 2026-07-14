import React, { useEffect, useState, useRef } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { Users, GraduationCap, BookOpen, Settings, LayoutDashboard } from "lucide-react";
import { toast } from "react-hot-toast";

const AdminDashboard = () => {
  const { getToken, isLoaded, isSignedIn } = useAuth();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState("users");
  const [data, setData] = useState({ users: [], enrollments: [], courses: [], students: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const token = await getToken();
      const headers = { Authorization: `Bearer ${token}` };

      const [usersRes, enrollmentsRes, coursesRes, studentsRes] = await Promise.all([
        fetch("/api/admin/users", { headers }),
        fetch("/api/admin/enrollments", { headers }),
        fetch("/api/admin/courses", { headers }),
        fetch("/api/admin/students", { headers })
      ]);

      if (!usersRes.ok || !enrollmentsRes.ok || !coursesRes.ok || !studentsRes.ok) {
        throw new Error("Failed to fetch admin data. Ensure you have admin privileges.");
      }

      const users = await usersRes.json();
      const enrollments = await enrollmentsRes.json();
      const courses = await coursesRes.json();
      const students = await studentsRes.json();

      setData({
        users: users.data,
        enrollments: enrollments.data,
        courses: courses.data,
        students: students.data
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/login");
    } else if (isLoaded && isSignedIn) {
      fetchData();
    }
  }, [isLoaded, isSignedIn, navigate]);

  if (loading) return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading Admin Dashboard...</div>;
  
  if (error) return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="p-8 border border-red-500/30 bg-red-500/10 rounded-2xl max-w-md text-center">
        <h2 className="text-xl font-bold text-red-400 mb-4">Access Denied</h2>
        <p className="text-gray-300">{error}</p>
        <button onClick={() => navigate('/')} className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full transition">Go Home</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row pt-20">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r border-white/10 p-6 space-y-2">
        <div className="flex items-center gap-3 mb-8">
          <LayoutDashboard className="text-orange-500" />
          <h2 className="text-xl font-bold">Admin Panel</h2>
        </div>
        
        {[
          { id: "users", label: "Users", icon: <Users size={18} /> },
          { id: "enrollments", label: "Enrollments", icon: <GraduationCap size={18} /> },
          { id: "courses", label: "Course Content (LMS)", icon: <BookOpen size={18} /> },
          { id: "students", label: "Students", icon: <Users size={18} /> },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab === tab.id ? 'bg-orange-500 text-black font-semibold shadow-[0_0_15px_rgba(234,88,12,0.4)]' : 'hover:bg-white/5 text-gray-400 hover:text-white'}`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          
          {activeTab === "users" && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><Users className="text-orange-500"/> All Users</h3>
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="p-4 font-semibold text-gray-300">Name</th>
                      <th className="p-4 font-semibold text-gray-300">Email</th>
                      <th className="p-4 font-semibold text-gray-300">Role</th>
                      <th className="p-4 font-semibold text-gray-300">City</th>
                      <th className="p-4 font-semibold text-gray-300">Admin?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.users.map((u, i) => (
                      <tr key={u._id} className="border-t border-white/5 hover:bg-white/5 transition">
                        <td className="p-4">{u.username || 'N/A'}</td>
                        <td className="p-4">{u.email}</td>
                        <td className="p-4"><span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">{u.role}</span></td>
                        <td className="p-4">{u.city || '-'}</td>
                        <td className="p-4">{u.isAdmin ? 'Yes' : 'No'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "enrollments" && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><GraduationCap className="text-orange-500"/> Student Enrollments</h3>
              <div className="grid gap-4">
                {data.enrollments.length === 0 && <p className="text-gray-400">No enrollments yet.</p>}
                {data.enrollments.map(e => (
                  <div key={e._id} className="p-5 border border-white/10 bg-white/5 rounded-2xl flex justify-between items-center hover:border-orange-500/30 transition">
                    <div>
                      <h4 className="font-bold text-lg">{e.user?.username || e.user?.email}</h4>
                      <p className="text-sm text-gray-400">Enrolled in: <span className="text-white font-medium">{e.course?.title}</span></p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${e.status === 'completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                        {e.status.toUpperCase()}
                      </span>
                      <p className="text-xs text-gray-500 mt-2">{new Date(e.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "courses" && (
            <CourseManager courses={data.courses} token={getToken} onUpdate={fetchData} />
          )}

          {activeTab === "students" && (
            <StudentManager students={data.students} token={getToken} onUpdate={fetchData} />
          )}

        </div>
      </main>
    </div>
  );
};

// Reusable File Uploader Component
const FileUploader = ({ onUploadSuccess, accept, folderName, token, buttonText = "Upload" }) => {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setIsUploading(true);
    try {
      const t = await token();
      const formData = new FormData();
      formData.append("file", file);
      if (folderName) formData.append("folderName", folderName);

      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${t}`
        },
        body: formData
      });

      const data = await res.json();
      if (res.ok) {
        onUploadSuccess(data.data.url);
        toast.success("File uploaded successfully");
      } else {
        toast.error(data.message || "Upload failed");
      }
    } catch (err) {
      toast.error("Error uploading file.");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex items-center gap-3">
      <input 
        type="file" 
        accept={accept} 
        onChange={handleUpload} 
        className="hidden" 
        ref={fileInputRef} 
      />
      <button 
        type="button"
        onClick={() => fileInputRef.current?.click()}
        disabled={isUploading}
        className="px-3 py-1.5 bg-white/10 hover:bg-orange-500 hover:text-black text-sm rounded-lg flex items-center gap-2 transition"
      >
        {isUploading ? "Uploading..." : buttonText}
      </button>
    </div>
  );
};

// Course Manager Sub-Component
const CourseManager = ({ courses, token, onUpdate }) => {
  const [editingCourse, setEditingCourse] = useState(null);
  const [editingInfoCourse, setEditingInfoCourse] = useState(null);

  if (editingCourse) {
    return <CourseEditor course={editingCourse} token={token} onBack={() => setEditingCourse(null)} onSaved={() => { setEditingCourse(null); onUpdate(); }} />;
  }

  if (editingInfoCourse !== null) {
    return <CourseInfoEditor course={editingInfoCourse === "new" ? null : editingInfoCourse} token={token} onBack={() => setEditingInfoCourse(null)} onSaved={() => { setEditingInfoCourse(null); onUpdate(); }} />;
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold flex items-center gap-3"><BookOpen className="text-orange-500"/> Manage Courses</h3>
        <button onClick={() => setEditingInfoCourse("new")} className="px-4 py-2 bg-orange-500 text-black font-bold rounded-xl hover:bg-orange-400 transition">+ Create Course</button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {courses.map(course => (
          <div key={course._id} className="p-6 border border-white/10 bg-white/5 rounded-2xl group hover:border-orange-500/50 transition">
            <h4 className="text-xl font-bold mb-2">{course.title}</h4>
            <div className="flex gap-4 text-sm text-gray-400 mb-6">
              <span>{course.notes?.length || 0} Notes</span>
              <span>{course.recordedVideos?.length || 0} Videos</span>
            </div>
            
            <div className="flex gap-2 mb-2">
              <button onClick={() => setEditingInfoCourse(course)} className="flex-1 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition text-sm">Edit Info</button>
              <button 
                onClick={async () => {
                  if (confirm(`Are you sure you want to delete ${course.title}?`)) {
                    const t = await token();
                    await fetch(`/api/admin/courses/${course._id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${t}` } });
                    onUpdate();
                  }
                }}
                className="px-4 py-2 bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-xl transition text-sm"
              >Delete</button>
            </div>

            <button 
              onClick={() => setEditingCourse(course)}
              className="px-5 py-2 w-full bg-white/10 hover:bg-orange-500 hover:text-black rounded-xl transition font-medium flex items-center justify-center gap-2"
            >
              <Settings size={16} /> Update LMS Content
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const CourseInfoEditor = ({ course, token, onBack, onSaved }) => {
  const isNew = !course;
  const [form, setForm] = useState({
    title: course?.title || "",
    slug: course?.slug || "",
    description: course?.description || "",
    price: course?.price ? course.price / 100 : 0, // converting cents to display
    originalPrice: course?.originalPrice ? course.originalPrice / 100 : 0,
    duration: course?.duration || "",
    image: course?.image || "",
    certificateImage: course?.certificateImage || "",
    tags: course?.tags ? course.tags.join(', ') : "",
    learnings: course?.learnings ? course.learnings.join('\n') : "",
    prerequisites: course?.prerequisites ? course.prerequisites.join('\n') : "",
    curriculum: course?.curriculum || [],
    teacher: course?.teacher || { name: "", role: "", bio: "", image: "" }
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const t = await token();
      const url = isNew ? `/api/admin/courses` : `/api/admin/courses/${course._id}`;
      const method = isNew ? "POST" : "PUT";
      
      const payload = { ...form };
      // Convert UI price back to cents/base units for backend
      payload.price = parseInt(payload.price) * 100;
      payload.originalPrice = parseInt(payload.originalPrice) * 100;
      payload.tags = form.tags.split(',').map(t => t.trim()).filter(t => t);
      payload.learnings = form.learnings.split('\n').map(l => l.trim()).filter(l => l);
      payload.prerequisites = form.prerequisites.split('\n').map(p => p.trim()).filter(p => p);

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${t}` },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.message || "Failed to save course");
      }
      toast.success("Course saved successfully!");
      onSaved();
    } catch (err) {
      toast.error("Error: " + err.message);
    } finally {
      setIsSaving(false);
    }
  };

  const addCurriculum = () => setForm({ ...form, curriculum: [...form.curriculum, { title: "", topics: [] }] });
  const updateCurriculumTitle = (idx, val) => {
    const newCurr = [...form.curriculum];
    newCurr[idx].title = val;
    setForm({ ...form, curriculum: newCurr });
  };
  const updateCurriculumTopics = (idx, val) => {
    const newCurr = [...form.curriculum];
    newCurr[idx].topics = val.split('\n').map(s => s.trim()).filter(s => s);
    setForm({ ...form, curriculum: newCurr });
  };
  const removeCurriculum = (idx) => setForm({ ...form, curriculum: form.curriculum.filter((_, i) => i !== idx) });

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <button onClick={onBack} className="text-gray-400 hover:text-orange-500 mb-2 text-sm">&larr; Back to Courses</button>
          <h3 className="text-2xl font-bold">{isNew ? "Create New Course" : `Edit Info: ${course.title}`}</h3>
        </div>
        <button onClick={handleSave} disabled={isSaving} className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-xl shadow-[0_0_15px_rgba(234,88,12,0.4)] transition">
          {isSaving ? "Saving..." : "Save Course"}
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Course Title</label>
            <input type="text" value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">URL Slug (e.g. 'web-dev')</label>
            <input type="text" value={form.slug} onChange={e => setForm({...form, slug: e.target.value})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Description</label>
            <textarea rows={3} value={form.description} onChange={e => setForm({...form, description: e.target.value})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none resize-none"></textarea>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Price (₹)</label>
              <input type="number" value={form.price} onChange={e => setForm({...form, price: e.target.value})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Original Price (₹)</label>
              <input type="number" value={form.originalPrice} onChange={e => setForm({...form, originalPrice: e.target.value})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Duration (e.g. '6 Months')</label>
            <input type="text" value={form.duration} onChange={e => setForm({...form, duration: e.target.value})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none" />
          </div>
          
          <div className="grid grid-cols-1 gap-4 pt-2 border-t border-white/10 mt-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Course Thumbnail Image</label>
              <div className="flex gap-2">
                <input type="text" value={form.image} onChange={e => setForm({...form, image: e.target.value})} className="flex-1 bg-black border border-white/20 rounded-lg px-3 py-2 text-sm focus:border-orange-500 outline-none" placeholder="Image URL..." />
                <FileUploader accept="image/*" folderName="courses" token={token} onUploadSuccess={(url) => setForm({...form, image: url})} buttonText="Upload" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Certificate Image</label>
              <div className="flex gap-2">
                <input type="text" value={form.certificateImage} onChange={e => setForm({...form, certificateImage: e.target.value})} className="flex-1 bg-black border border-white/20 rounded-lg px-3 py-2 text-sm focus:border-orange-500 outline-none" placeholder="Certificate URL..." />
                <FileUploader accept="image/*" folderName="courses" token={token} onUploadSuccess={(url) => setForm({...form, certificateImage: url})} buttonText="Upload" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Sections */}
      <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Tags (Comma separated)</label>
            <input type="text" value={form.tags} onChange={e => setForm({...form, tags: e.target.value})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none" placeholder="e.g. Web Dev, Advanced" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">What You Will Learn (One per line)</label>
            <textarea rows={5} value={form.learnings} onChange={e => setForm({...form, learnings: e.target.value})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none resize-none"></textarea>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Prerequisites (One per line)</label>
            <textarea rows={3} value={form.prerequisites} onChange={e => setForm({...form, prerequisites: e.target.value})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none resize-none"></textarea>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-orange-400 mb-2">Teacher Details</h4>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Name</label>
            <input type="text" value={form.teacher.name} onChange={e => setForm({...form, teacher: {...form.teacher, name: e.target.value}})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Role / Title</label>
            <input type="text" value={form.teacher.role} onChange={e => setForm({...form, teacher: {...form.teacher, role: e.target.value}})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Bio</label>
            <textarea rows={3} value={form.teacher.bio} onChange={e => setForm({...form, teacher: {...form.teacher, bio: e.target.value}})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none resize-none"></textarea>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Teacher Photo</label>
            <div className="flex gap-2">
              <input type="text" value={form.teacher.image} onChange={e => setForm({...form, teacher: {...form.teacher, image: e.target.value}})} className="flex-1 bg-black border border-white/20 rounded-lg px-3 py-2 text-sm focus:border-orange-500 outline-none" placeholder="Image URL..." />
              <FileUploader accept="image/*" folderName="teachers" token={token} onUploadSuccess={(url) => setForm({...form, teacher: {...form.teacher, image: url}})} buttonText="Upload" />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-white/10">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold text-orange-400">Curriculum</h4>
          <button onClick={addCurriculum} className="text-sm px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg">+ Add Section</button>
        </div>
        <div className="space-y-4">
          {form.curriculum.map((section, idx) => (
            <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <input type="text" placeholder="Section Title (e.g. Frontend Mastery)" value={section.title} onChange={e => updateCurriculumTitle(idx, e.target.value)} className="flex-1 bg-black border border-white/20 rounded-lg px-3 py-2 text-sm focus:border-orange-500 outline-none mr-4" />
                <button onClick={() => removeCurriculum(idx)} className="text-red-500 hover:text-red-400 text-sm">Remove</button>
              </div>
              <textarea rows={3} placeholder="Topics (One per line)..." value={section.topics.join('\n')} onChange={e => updateCurriculumTopics(idx, e.target.value)} className="w-full bg-black border border-white/20 rounded-lg px-3 py-2 text-sm focus:border-orange-500 outline-none resize-none"></textarea>
            </div>
          ))}
          {form.curriculum.length === 0 && <p className="text-sm text-gray-500 italic">No curriculum added yet.</p>}
        </div>
      </div>
    </div>
  );
};

const CourseEditor = ({ course, token, onBack, onSaved }) => {
  const [form, setForm] = useState({
    classTimings: course.classTimings || "",
    joinLink: course.joinLink || "",
    notes: course.notes || [],
    recordedVideos: course.recordedVideos || []
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const t = await token();
      const res = await fetch(`/api/admin/courses/${course._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${t}` },
        body: JSON.stringify(form)
      });
      toast.success("Course content updated!");
      onSaved();
    } catch (err) {
      toast.error("Error saving course data.");
    } finally {
      setIsSaving(false);
    }
  };

  const addNote = () => setForm({ ...form, notes: [...form.notes, { title: "", content: "" }] });
  const updateNote = (idx, field, val) => {
    const newNotes = [...form.notes];
    newNotes[idx][field] = val;
    setForm({ ...form, notes: newNotes });
  };
  const removeNote = (idx) => setForm({ ...form, notes: form.notes.filter((_, i) => i !== idx) });

  const addVideo = () => setForm({ ...form, recordedVideos: [...form.recordedVideos, { title: "", url: "" }] });
  const updateVideo = (idx, field, val) => {
    const newVids = [...form.recordedVideos];
    newVids[idx][field] = val;
    setForm({ ...form, recordedVideos: newVids });
  };
  const removeVideo = (idx) => setForm({ ...form, recordedVideos: form.recordedVideos.filter((_, i) => i !== idx) });

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <button onClick={onBack} className="text-gray-400 hover:text-orange-500 mb-2 text-sm">&larr; Back to Courses</button>
          <h3 className="text-2xl font-bold">Editing: {course.title}</h3>
        </div>
        <button onClick={handleSave} disabled={isSaving} className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-xl shadow-[0_0_15px_rgba(234,88,12,0.4)] transition">
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Live Classes Section */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-orange-400">Live Classes</h4>
          <div className="space-y-4 p-5 bg-white/5 border border-white/10 rounded-2xl">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Class Timings</label>
              <input type="text" value={form.classTimings} onChange={e => setForm({...form, classTimings: e.target.value})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none" placeholder="e.g. Mon-Wed-Fri, 8:00 PM" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Zoom/Meet Join Link</label>
              <input type="text" value={form.joinLink} onChange={e => setForm({...form, joinLink: e.target.value})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none" placeholder="https://zoom.us/j/..." />
            </div>
          </div>
        </div>

        {/* Recorded Videos */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-xl font-semibold text-orange-400">Recorded Videos</h4>
            <button onClick={addVideo} className="text-sm px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg">+ Add Video</button>
          </div>
          <div className="space-y-4">
            {form.recordedVideos.map((vid, idx) => (
              <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex gap-4 items-start">
                <div className="flex-1 space-y-3">
                  <input type="text" placeholder="Video Title" value={vid.title} onChange={e => updateVideo(idx, 'title', e.target.value)} className="w-full bg-black border border-white/20 rounded-lg px-3 py-2 text-sm focus:border-orange-500 outline-none" />
                  <div className="flex gap-2">
                    <input type="text" placeholder="Video URL (Vimeo, YouTube unlisted, etc)" value={vid.url} onChange={e => updateVideo(idx, 'url', e.target.value)} className="flex-1 bg-black border border-white/20 rounded-lg px-3 py-2 text-sm focus:border-orange-500 outline-none" />
                    <FileUploader accept="video/*" folderName="videos" token={token} onUploadSuccess={(url) => updateVideo(idx, 'url', url)} />
                  </div>
                </div>
                <button onClick={() => removeVideo(idx)} className="text-red-500 hover:text-red-400 text-sm mt-2">Remove</button>
              </div>
            ))}
            {form.recordedVideos.length === 0 && <p className="text-sm text-gray-500 italic">No videos added yet.</p>}
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="space-y-4 pt-6 border-t border-white/10">
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-semibold text-orange-400">Course Notes</h4>
          <button onClick={addNote} className="text-sm px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg">+ Add Note</button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {form.notes.map((note, idx) => (
            <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-3">
              <div className="flex justify-between">
                <input type="text" placeholder="Note Title" value={note.title} onChange={e => updateNote(idx, 'title', e.target.value)} className="w-full bg-black border border-white/20 rounded-lg px-3 py-2 text-sm focus:border-orange-500 outline-none mr-2" />
                <button onClick={() => removeNote(idx)} className="text-red-500 hover:text-red-400 text-sm">Remove</button>
              </div>
              <textarea rows={4} placeholder="Note Content (Markdown supported)..." value={note.content} onChange={e => updateNote(idx, 'content', e.target.value)} className="w-full bg-black border border-white/20 rounded-lg px-3 py-2 text-sm focus:border-orange-500 outline-none resize-none"></textarea>
              <div className="flex justify-between items-center mt-1">
                <FileUploader accept="image/*,.pdf" folderName="notes" token={token} onUploadSuccess={(url) => updateNote(idx, 'fileUrl', url)} buttonText="Attach File" />
                {note.fileUrl && <a href={note.fileUrl} target="_blank" rel="noreferrer" className="text-xs text-orange-400 hover:underline truncate max-w-[200px] block">View Attached</a>}
              </div>
            </div>
          ))}
          {form.notes.length === 0 && <p className="text-sm text-gray-500 italic">No notes added yet.</p>}
        </div>
      </div>

    </div>
  );
};

// Student Manager Sub-Component
const StudentManager = ({ students = [], token, onUpdate }) => {
  const [editingInfoStudent, setEditingInfoStudent] = useState(null);

  if (editingInfoStudent !== null) {
    return <StudentInfoEditor student={editingInfoStudent === "new" ? null : editingInfoStudent} token={token} onBack={() => setEditingInfoStudent(null)} onSaved={() => { setEditingInfoStudent(null); onUpdate(); }} />;
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold flex items-center gap-3"><Users className="text-orange-500"/> Manage Students</h3>
        <button onClick={() => setEditingInfoStudent("new")} className="px-4 py-2 bg-orange-500 text-black font-bold rounded-xl hover:bg-orange-400 transition">+ Add Student</button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {students.map(student => (
          <div key={student._id} className="p-6 border border-white/10 bg-white/5 rounded-2xl group hover:border-orange-500/50 transition">
            <div className="flex items-center gap-4 mb-4">
              {student.image && <img src={student.image} alt={student.name} className="w-16 h-16 rounded-full object-cover" />}
              <div>
                <h4 className="text-xl font-bold">{student.name}</h4>
                <p className="text-sm text-gray-400">{student.course} | Batch {student.batch}</p>
              </div>
            </div>
            
            <div className="flex gap-2 mb-2">
              <button onClick={() => setEditingInfoStudent(student)} className="flex-1 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition text-sm">Edit Info</button>
              <button 
                onClick={async () => {
                  if (confirm(`Are you sure you want to delete ${student.name}?`)) {
                    const t = await token();
                    await fetch(`/api/admin/students/${student._id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${t}` } });
                    onUpdate();
                  }
                }}
                className="px-4 py-2 bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-xl transition text-sm"
              >Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StudentInfoEditor = ({ student, token, onBack, onSaved }) => {
  const isNew = !student;
  const [form, setForm] = useState({
    slug: student?.slug || "",
    name: student?.name || "",
    course: student?.course || "",
    projectsCount: student?.projectsCount || 0,
    image: student?.image || "",
    bio: student?.bio || "",
    role: student?.role || "",
    batch: student?.batch || "",
    skills: student?.skills ? student.skills.join(', ') : "",
    review: student?.review || "",
    socials: {
      github: student?.socials?.github || "",
      linkedin: student?.socials?.linkedin || "",
      website: student?.socials?.website || ""
    },
    projects: student?.projects || []
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const t = await token();
      const url = isNew ? `/api/admin/students` : `/api/admin/students/${student._id}`;
      const method = isNew ? "POST" : "PUT";
      
      const payload = { ...form };
      payload.skills = form.skills.split(',').map(s => s.trim()).filter(s => s);

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${t}` },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.message || "Failed to save student");
      }
      toast.success("Student saved successfully!");
      onSaved();
    } catch (err) {
      toast.error("Error: " + err.message);
    } finally {
      setIsSaving(false);
    }
  };

  const addProject = () => setForm({ ...form, projects: [...form.projects, { title: "", desc: "", tags: [], demoLink: "", githubLink: "" }] });
  const updateProject = (idx, field, val) => {
    const newProjects = [...form.projects];
    if (field === 'tags') {
      newProjects[idx][field] = val.split(',').map(t => t.trim()).filter(t => t);
    } else {
      newProjects[idx][field] = val;
    }
    setForm({ ...form, projects: newProjects });
  };
  const removeProject = (idx) => setForm({ ...form, projects: form.projects.filter((_, i) => i !== idx) });

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <button onClick={onBack} className="text-gray-400 hover:text-orange-500 mb-2 text-sm">&larr; Back to Students</button>
          <h3 className="text-2xl font-bold">{isNew ? "Add New Student" : `Edit Info: ${student.name}`}</h3>
        </div>
        <button onClick={handleSave} disabled={isSaving} className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-xl shadow-[0_0_15px_rgba(234,88,12,0.4)] transition">
          {isSaving ? "Saving..." : "Save Student"}
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Student Name</label>
            <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">URL Slug (e.g. 'john-doe')</label>
            <input type="text" value={form.slug} onChange={e => setForm({...form, slug: e.target.value})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Course Enrolled</label>
            <input type="text" value={form.course} onChange={e => setForm({...form, course: e.target.value})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Role / Headline</label>
            <input type="text" value={form.role} onChange={e => setForm({...form, role: e.target.value})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none" placeholder="e.g. Full Stack Developer" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Batch Year</label>
              <input type="text" value={form.batch} onChange={e => setForm({...form, batch: e.target.value})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none" placeholder="e.g. 2025" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Projects Count</label>
              <input type="number" value={form.projectsCount} onChange={e => setForm({...form, projectsCount: parseInt(e.target.value) || 0})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Bio</label>
            <textarea rows={3} value={form.bio} onChange={e => setForm({...form, bio: e.target.value})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none resize-none"></textarea>
          </div>
          
          <div>
            <label className="block text-sm text-gray-400 mb-1">Profile Image URL</label>
            <div className="flex gap-2">
              <input type="text" value={form.image} onChange={e => setForm({...form, image: e.target.value})} className="flex-1 bg-black border border-white/20 rounded-lg px-3 py-2 text-sm focus:border-orange-500 outline-none" placeholder="Image URL..." />
              <FileUploader accept="image/*" folderName="students" token={token} onUploadSuccess={(url) => setForm({...form, image: url})} buttonText="Upload" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Skills (Comma separated)</label>
            <input type="text" value={form.skills} onChange={e => setForm({...form, skills: e.target.value})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none" placeholder="e.g. React, Node, MongoDB" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Testimonial / Review</label>
            <textarea rows={4} value={form.review} onChange={e => setForm({...form, review: e.target.value})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none resize-none" placeholder="What the student said about the course..."></textarea>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-orange-400 mb-2">Social Links</h4>
          <div>
            <label className="block text-sm text-gray-400 mb-1">GitHub URL</label>
            <input type="text" value={form.socials.github} onChange={e => setForm({...form, socials: {...form.socials, github: e.target.value}})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">LinkedIn URL</label>
            <input type="text" value={form.socials.linkedin} onChange={e => setForm({...form, socials: {...form.socials, linkedin: e.target.value}})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Website URL</label>
            <input type="text" value={form.socials.website} onChange={e => setForm({...form, socials: {...form.socials, website: e.target.value}})} className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 focus:border-orange-500 outline-none" />
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-white/10">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold text-orange-400">Featured Projects</h4>
          <button onClick={addProject} className="text-sm px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg">+ Add Project</button>
        </div>
        <div className="space-y-4">
          {form.projects.map((project, idx) => (
            <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <input type="text" placeholder="Project Title" value={project.title} onChange={e => updateProject(idx, 'title', e.target.value)} className="flex-1 bg-black border border-white/20 rounded-lg px-3 py-2 text-sm focus:border-orange-500 outline-none mr-4" />
                <button onClick={() => removeProject(idx)} className="text-red-500 hover:text-red-400 text-sm">Remove</button>
              </div>
              <textarea rows={2} placeholder="Description..." value={project.desc} onChange={e => updateProject(idx, 'desc', e.target.value)} className="w-full bg-black border border-white/20 rounded-lg px-3 py-2 text-sm focus:border-orange-500 outline-none resize-none"></textarea>
              <input type="text" placeholder="Tags (comma separated)" value={project.tags.join(', ')} onChange={e => updateProject(idx, 'tags', e.target.value)} className="w-full bg-black border border-white/20 rounded-lg px-3 py-2 text-sm focus:border-orange-500 outline-none" />
              <div className="flex gap-4">
                <input type="text" placeholder="Live Demo Link" value={project.demoLink} onChange={e => updateProject(idx, 'demoLink', e.target.value)} className="flex-1 bg-black border border-white/20 rounded-lg px-3 py-2 text-sm focus:border-orange-500 outline-none" />
                <input type="text" placeholder="GitHub Link" value={project.githubLink} onChange={e => updateProject(idx, 'githubLink', e.target.value)} className="flex-1 bg-black border border-white/20 rounded-lg px-3 py-2 text-sm focus:border-orange-500 outline-none" />
              </div>
            </div>
          ))}
          {form.projects.length === 0 && <p className="text-sm text-gray-500 italic">No projects added yet.</p>}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
